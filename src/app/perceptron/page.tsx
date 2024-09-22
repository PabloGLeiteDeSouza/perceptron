import FormCalcularPerceptron from "@/components/Forms/FormCalcularPerceptron";

export default function Perceptron(){
    return (
        <main className="w-full flex flex-col items-center my-5 gap-5" >
            <div>
                <h2 className="text-2xl" >Calcular perceptron</h2>
            </div>
            <div className="" >
                <FormCalcularPerceptron/>
            </div>
        </main>
    )
}