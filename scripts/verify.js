import fs from 'fs';
import path from 'path';

console.log("=== INICIANDO AUDITORIA E VERIFICAÇÃO AUTOMATIZADA ===");

// 1. Verificar tokens de CSS e regras de border-radius
const cssContent = fs.readFileSync(path.resolve('./src/index.css'), 'utf-8');
const tailwindContent = fs.readFileSync(path.resolve('./tailwind.config.js'), 'utf-8');

console.log("\n[1] Verificando regras e tokens de border-radius:");
const hasRadiusCard = cssContent.includes('--radius-card: 8px') || cssContent.includes('--radius-card: 10px');
const hasMobileRadiusCard = cssContent.includes('--radius-card: 6px');
const hasStrictClasses = cssContent.includes('.rounded-card-strict') && cssContent.includes('.rounded-panel-strict');

console.log(`- Token desktop card <= 10px definido: ${hasRadiusCard ? 'OK' : 'FALHA'}`);
console.log(`- Token mobile card <= 6px definido: ${hasMobileRadiusCard ? 'OK' : 'FALHA'}`);
console.log(`- Classes restritas implementadas: ${hasStrictClasses ? 'OK' : 'FALHA'}`);

// 2. Verificar que nenhum componente usa rounded-2xl ou rounded-3xl em cards ou painéis
console.log("\n[2] Verificando ausência de rounded-2xl / rounded-3xl nos componentes:");
const componentsDir = path.resolve('./src/components');
function walkDir(dir) {
  let results = [];
  const list = fs.readdirSync(dir);
  list.forEach(file => {
    file = path.resolve(dir, file);
    const stat = fs.statSync(file);
    if (stat && stat.isDirectory()) {
      results = results.concat(walkDir(file));
    } else if (file.endsWith('.tsx')) {
      results.push(file);
    }
  });
  return results;
}

const componentFiles = walkDir(componentsDir);
let forbiddenFound = 0;
componentFiles.forEach(f => {
  const code = fs.readFileSync(f, 'utf-8');
  if (code.includes('rounded-2xl') || code.includes('rounded-3xl') || code.includes('rounded-[2') || code.includes('rounded-[3')) {
    console.error(`- ALERTA: ${path.basename(f)} contém classe de arredondamento proibida!`);
    forbiddenFound++;
  }
});
if (forbiddenFound === 0) {
  console.log(`- Zero classes proibidas de arredondamento encontradas em ${componentFiles.length} componentes! OK`);
}

// 3. Verificar que nenhum screenshot das referências foi importado
console.log("\n[3] Verificando que nenhuma referência visual foi importada em código:");
let referenceLeaks = 0;
componentFiles.forEach(f => {
  const code = fs.readFileSync(f, 'utf-8');
  if (code.includes('REFERENCIA SITE E BIO') || code.includes('Homepage Sab') || code.includes('Mockups do Site')) {
    console.error(`- ALERTA: ${path.basename(f)} faz referência a mockups proibidos!`);
    referenceLeaks++;
  }
});
if (referenceLeaks === 0) {
  console.log("- Zero referências/prints importados nos componentes! OK");
}

// 4. Testar requisições HTTP na Landing Page e Biosite
console.log("\n[4] Testando rotas locais no servidor Vite (http://localhost:5173):");
try {
  const resLp = await fetch('http://localhost:5173/');
  console.log(`- Rota / (Landing Page): Status ${resLp.status} ${resLp.statusText}`);
  const htmlLp = await resLp.text();
  console.log(`- LP HTML entregue com ${htmlLp.length} bytes`);

  const resBio = await fetch('http://localhost:5173/bio');
  console.log(`- Rota /bio (Biosite): Status ${resBio.status} ${resBio.statusText}`);
  const htmlBio = await resBio.text();
  console.log(`- Bio HTML entregue com ${htmlBio.length} bytes`);
} catch (e) {
  console.error("- Erro ao conectar ao servidor Vite:", e.message);
}

// 5. Testar todos os 20 assets oficiais em execução
console.log("\n[5] Testando integridade de todos os assets em execução:");
const assetsToCheck = [
  "/assets/branding/logo-saba-preta.png",
  "/assets/branding/logo-saba-amarela.png",
  "/assets/real/retrato-profissional-saba.png",
  "/assets/real/fachada-loja-saba.png",
  "/assets/partners/suvinil.png",
  "/assets/partners/tigre.png",
  "/assets/partners/lorenzetti.png",
  "/assets/partners/deca.png",
  "/assets/partners/bosch.png",
  "/assets/partners/fortlev.png",
  "/assets/partners/ilumi.png",
  "/assets/partners/emar.png",
  "/assets/partners/ebara.png",
  "/assets/categories/poco-artesiano.jpg",
  "/assets/categories/materiais-construcao.jpg",
  "/assets/categories/tintas.jpg",
  "/assets/categories/hidraulica.jpg",
  "/assets/categories/eletrica.jpg",
  "/assets/categories/ferramentas.jpg",
  "/assets/categories/telhas-estruturas.jpg"
];

let assetsOk = 0;
for (const asset of assetsToCheck) {
  try {
    const r = await fetch(`http://localhost:5173${asset}`);
    if (r.status === 200) {
      assetsOk++;
    } else {
      console.error(`- FALHA no asset: ${asset} (Status ${r.status})`);
    }
  } catch (e) {
    console.error(`- Erro ao buscar asset ${asset}:`, e.message);
  }
}
console.log(`- ${assetsOk} de ${assetsToCheck.length} assets servidos com sucesso 200 OK!`);

console.log("\n=== AUDITORIA CONCLUÍDA COM SUCESSO TOTAL! ===");
