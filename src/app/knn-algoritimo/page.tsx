import Link from "next/link";

export default function KnnAlgoritimo() {
    return (
        <div className="" >
            <div>
                <h2>Escolha o exemplo de calculo do algoritimo:</h2>
            </div>
            <div>
                <Link href="/knn-algoritimo/recomendacao-de-filmes" >Recomendacao de Filmes</Link>
            </div>
        </div>
    )
}