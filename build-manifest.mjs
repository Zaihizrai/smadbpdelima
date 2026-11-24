// Membina data/files.json daripada kandungan folder fail/<bahagian>/.
// Dijalankan oleh GitHub Actions setiap kali ada perubahan. Tidak perlu dijalankan secara manual.
import { readdirSync, readFileSync, writeFileSync, statSync, existsSync, mkdirSync } from "node:fs";
import { execFileSync } from "node:child_process";

const ROOT = "fail";
const SKIP = new Set(["baca-saya.txt", "pautan.txt"]);
const today = new Date().toISOString().slice(0, 10);

function commitDate(p) {
  try {
    const d = execFileSync("git", ["log", "-1", "--format=%cs", "--", p], { encoding: "utf8" }).trim();
    return d || today;
  } catch {
    return today;
  }
}
function titleOf(name) {
  return name.replace(/\.[^.]+$/, "").replace(/_+/g, " ").replace(/\s+/g, " ").trim();
}

const out = [];
const sections = readdirSync(ROOT).filter((n) => /^\d+-\d+$/.test(n));

for (const sec of sections) {
  const dir = `${ROOT}/${sec}`;
  for (const name of readdirSync(dir)) {
    if (name.startsWith(".") || SKIP.has(name)) continue;
    const p = `${dir}/${name}`;
    const st = statSync(p);
    if (!st.isFile()) continue;
    out.push({
      section: sec,
      kind: "file",
      title: titleOf(name),
      filename: name,
      path: p,
      ext: (name.split(".").pop() || "").toLowerCase(),
      size: st.size,
      date: commitDate(p),
    });
  }
  const linkFile = `${dir}/pautan.txt`;
  if (existsSync(linkFile)) {
    const date = commitDate(linkFile);
    for (const raw of readFileSync(linkFile, "utf8").split(/\r?\n/)) {
      const line = raw.trim();
      if (!line || line.startsWith("#")) continue;
      const [title, url, note] = line.split("|").map((x) => (x || "").trim());
      if (!title || !/^https:\/\//i.test(url || "")) continue;
      out.push({ section: sec, kind: "link", title, url, note: note || "", date });
    }
  }
}

mkdirSync("data", { recursive: true });
writeFileSync("data/files.json", JSON.stringify(out, null, 1) + "\n");
console.log(`Senarai fail siap: ${out.length} entri.`);
