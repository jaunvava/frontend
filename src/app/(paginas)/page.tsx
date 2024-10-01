import ProdutoItem from "@/components/produto/Produtoitem";
import { produtos } from "@/core";

export default function Home() {
  return (
    <div className="grid gap-5 grid-cols-4 container">
      {produtos.map((produto) => (
        <ProdutoItem key={produto.id} produto={produto} />
      ))}
    </div>
  );
}
