"use client"
import { ResultCalcular } from "@/components/Forms/FormCalcularPerceptron/types";
import { useSearchParams } from "next/navigation";

const Resultados: React.FC = () => {
    const searchParams = useSearchParams()
 
    const result:ResultCalcular = JSON.parse(searchParams.get('result') as string);

    return (
        <div>
            <p>Foram realizadas {result.total_rotacoes} rotacoes totais</p>
            <p>resultados:</p>
            <table>
                <thead>
                    <th>Numero da Linha</th>
                    <th>Peso Bias</th>
                    <th>Peso N1</th>
                    <th>Peso N2</th>
                    <th>Voltas</th>
                    <th>Passou?</th>
                </thead>
                <tbody>
                    {
                        result.final_result.map((values, i) => (
                            <tr key={i} >
                                <th>{i+1}</th>
                                <td>{values.wbias}</td>
                                <td>{values.wn1}</td>
                                <td>{values.wn2}</td>
                                <td>{values.voltas}</td>
                                <td>{values.passed ? 'Sim' : 'Não'}</td>
                            </tr>
                        ))
                    }
                </tbody>
            </table>
        </div>
    )
}

export default Resultados;