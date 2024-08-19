import { FormikHelpers } from "formik";

type Values = {
    bias: string;
    wbias: string;
    n1: string;
    wn1: string;
    n2: string;
    wn2: string;
    expected_result: string
}


export const onSubmit = async (values: Values, formikHelpers: FormikHelpers<Values>) => {
    try {
        const { bias, expected_result, n1, n2, wbias, wn1, wn2 } = values;
        const result = (Number(bias)*Number(wbias)) + (Number(n1)*Number(wn1)) + (Number(n2)*Number(wn2)) >= 0 ? 1 : 0;
        if (result  !== Number(expected_result)) {
            throw new Error('Erro uma das bases está incorreta!');
        }
        alert('Valores validados com sucesso')
    } catch (error) {
        alert((error as Error).message);
    }
}