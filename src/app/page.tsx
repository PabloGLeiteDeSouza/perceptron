import FormCalcularPerceptron from "@/components/Forms/FormCalcularPerceptron";
import Link from "next/link";

export default function Home() {
  return (
    <main className="w-full flex flex-col items-center my-5 gap-5" >
      <div>
        <h2>Bem vindo(a) a nossa aplciacao de calculos!</h2>
        <div>
          <p>Qual calculo voce deseja iniciar?</p>
          <div>
            <Link href="/perceptron">Perceptron</Link>
            <Link href="/knn-algoritimo" >Algoritimo KNN</Link>
          </div>
        </div>
      </div>
    </main>
  );
}
