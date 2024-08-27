export type Values = {
    linhas: Array<{
        bias: string;
        wbias: string;
        n1: string;
        wn1: string;
        n2: string;
        wn2: string;
        expected_result: string
    }>
}

export type ResultCalcular = {
    final_result: {
        wbias: string;
        wn1: string;
        wn2: string;
        passed: boolean;
        voltas: number;
    }[];
    status: boolean;
    total_rotacoes: number;
}

export type ValoresLinhas = "bias" | "wbias" | "n1" | "wn1" | "n2" | "wn2" | "expected_result"
