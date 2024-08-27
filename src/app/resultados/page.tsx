import { ResultCalcular } from "@/components/Forms/FormCalcularPerceptron/types";
import { useSearchParams } from "next/navigation";

const Resultados: React.FC = () => {
    const searchParams = useSearchParams()
 
    const result:ResultCalcular = JSON.parse(searchParams.get('result') as string);

    return (
        <div>
            <p>Foram realizadas {result.total_rotacoes} rotacoes</p>
        </div>
    )
}

export default Resultados;