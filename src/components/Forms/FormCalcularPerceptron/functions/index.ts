import { FormikErrors, FormikHelpers } from "formik";
import { ValoresLinhas, Values } from "../types";
import { ChangeEvent } from "react";
import { AppRouterInstance } from "next/dist/shared/lib/app-router-context.shared-runtime";



export const onSubmit = async (values: Values, formikHelpers: FormikHelpers<Values>, router: AppRouterInstance, setIsLoading: React.Dispatch<React.SetStateAction<boolean>>) => {
    setIsLoading(true);
    try {
        const response = {
            final_result: values.linhas.map((val) => { return { wbias: val.wbias, wn1: val.wn1, wn2: val.wn2, passed: false, voltas: 0 };}),
            status: false,
            total_rotacoes: 0,
        }
        const array_ajustes = [0,0.1,0.2,0.3,0.4,0.5,0.6,0.7,0.8,0.9,1];
        const pesos = values.linhas.map((val) => { return { wbias: val.wbias, wn1: val.wn1, wn2: val.wn2 };});
        while(!response.status){
            for (let i = 0; i < values.linhas.length; i++) {
                const { bias, expected_result, n1, n2, wbias, wn1, wn2 } = values.linhas[i];
                const result = (Number(bias)*Number(pesos[i].wbias)) + (Number(n1)*Number(pesos[i].wn1)) + (Number(n2)*Number(pesos[i].wn2)) > 0 ? 1 : 0;
                if (result !== Number(expected_result)) {
                    // Otimizacao de algoritimo
                    // if ( expected_result == "0") {
                    //     if (Number(bias) >= 0 && Number(n1) > 0 && Number(n2) > 0) {
                    //         if (Number(bias) > 0) {
                    //             pesos[i].wbias = '0';
                    //         }
                    //         if (Number(n1) > 0) {
                    //             pesos[i].wn1 = '0';
                    //         }
                    //         if (Number(n2) > 0) {
                    //             pesos[i].wn2 = '0';
                    //         }
                    //     }
                    // } else {
                        const idx_b = array_ajustes.findIndex((vl) => vl === Number(pesos[i].wbias)) + 1 < array_ajustes.length ? array_ajustes.findIndex((vl) => vl === Number(pesos[i].wbias)) + 1 : 0;
                        if (array_ajustes[idx_b] === Number(wbias)) {
                            const idx_n1 = array_ajustes.findIndex((vl) => vl === Number(pesos[i].wn1)) + 1 < array_ajustes.length ? array_ajustes.findIndex((vl) => vl === Number(pesos[i].wn1)) + 1 : 0;
                            if (array_ajustes[idx_n1] === Number(wn1)) {
                                const idx_n2 = array_ajustes.findIndex((vl) => vl === Number(pesos[i].wn2)) + 1 < array_ajustes.length ? array_ajustes.findIndex((vl) => vl === Number(pesos[i].wn2)) + 1 : 0;
                                if (array_ajustes[idx_n2] === Number(wn2)) {
                                    throw new Error("Solucao Impossivel de ser realizada");
                                }
                                pesos[i].wn2 = String(array_ajustes[idx_n2]);
                            }
                            pesos[i].wn1 = String(array_ajustes[idx_n1]);
                        }
                        pesos[i].wbias = String(array_ajustes[idx_b]);
                    // }
                } else {
                    console.log("passou")
                    response.final_result[i] = {...pesos[i], passed: true, voltas: response.final_result[i].voltas + 1};
                }
            }
            response.total_rotacoes++;
            let validate = 0;
            for (let i = 0; i < values.linhas.length; i++) {
                if (response.final_result[i].passed) {
                    validate ++;
                }
                if (i == values.linhas.length - 1 && validate == values.linhas.length) {
                    response.status = true;
                }
            }
            
            console.log(response.total_rotacoes);
            console.log(response.status);
        }
        setIsLoading(false)
        router.push('/perceptron/resultados?result='+JSON.stringify(response));
    } catch (error) {
        setIsLoading(false);
        alert((error as Error).message);
    }
}

export const onChangeValues = (e: ChangeEvent<HTMLInputElement>, values: Values, i: number, setValues: (values: React.SetStateAction<Values>, shouldValidate?: boolean) => Promise<void | FormikErrors<Values>>, type: ValoresLinhas): void => {
    const vals = values;
    vals.linhas[i][type] = e.target.value;
    setValues(vals);
}

export const addItem = (values: Values, setValues: (values: React.SetStateAction<Values>, shouldValidate?: boolean) => Promise<void | FormikErrors<Values>>) => {
    const vals = values;
    vals.linhas.push({ bias: "", expected_result: "", n1: "", n2: "", wbias: "", wn1: "", wn2: "" });
    setValues(vals);
}