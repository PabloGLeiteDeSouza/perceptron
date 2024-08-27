"use client";
import { Formik } from "formik";
import { addItem, onChangeValues, onSubmit } from "./functions";
import * as Yup from "yup";
import { Values } from "./types";
import { IoAdd } from "react-icons/io5";
import { useRouter } from "next/navigation";
import React from "react";

const validationSchema = Yup.object().shape({
  bias: Yup.number().required("O campo é obrigatório!"),
  wbias: Yup.number().required("O campo é obrigatório!"),
  n1: Yup.number().required("O campo é obrigatório!"),
  wn1: Yup.number().required("O campo é obrigatório!"),
  n2: Yup.number().required("O campo é obrigatório!"),
  wn2: Yup.number().required("O campo é obrigatório!"),
  expected_result: Yup.number().required("O campo é obrigatório!"),
});

const FormCalcularPerceptron: React.FC = () => {

  const router = useRouter();

  const [isLoading, setIsLoading] = React.useState(false);


  return (
    <>
        { isLoading ? (<><p>Carregando...</p></>) : (
        <>
          <Formik
            initialValues={{
              linhas: [{
                bias: "",
                wbias: "",
                n1: "",
                wn1: "",
                n2: "",
                wn2: "",
                expected_result: "",
              }]
            }}
            onSubmit={(values, errors) => onSubmit(values, errors, router, setIsLoading)}
          >
            {({ setValues, handleSubmit, errors, values }) => {
              return (
                <form
                  onSubmit={handleSubmit}
                  className="flex flex-col gap-5 items-center"
                >
                  {
                    values.linhas.map((vls, i) => (
                      <>
                        <div>
                          <h2>
                            Linha {i + 1}
                          </h2>
                        </div>
                        <label className="form-control w-full max-w-xs">
                          <div className="label">
                            <span className="label-text">Informe o valor do Bias?</span>
                          </div>
                          <label className="input input-bordered flex items-center gap-2">
                            Bias
                            <input type="number" className="grow" placeholder="Bias" onChange={(e) => onChangeValues(e, values, i, setValues, "bias")} />
                          </label>
                          <div className="label">
                            <span className="label-text-alt text-error">{
                              errors.linhas && typeof errors.linhas != "string" && (errors.linhas as Array<Values>) == errors.linhas ? errors.linhas[i].bias : ""}</span>
                          </div>
                        </label>
                        <label className="form-control w-full max-w-xs">
                          <div className="label">
                            <span className="label-text">
                              Informe o valor do peso inicial do Bias?
                            </span>
                          </div>
                          <div className="tooltip" data-tip={vls.wbias}>
                            <input type="range" step={0.1} min={0} max={1} value={vls.wbias} onChange={(e) => onChangeValues(e, values, i, setValues, "wbias")} className="range range-xs" />
                          </div>
                          <div className="label">
                            <span className="label-text-alt text-error">{errors.linhas && typeof errors.linhas != "string" && (errors.linhas as Array<Values>) == errors.linhas ? errors.linhas[i].wbias : ""}</span>
                          </div>
                        </label>
                        <label className="form-control w-full max-w-xs">
                          <div className="label">
                            <span className="label-text">Qual o valor de N1?</span>
                          </div>
                          <label className="input input-bordered flex items-center gap-2">
                            N1
                            <input
                              type="number"
                              className="grow"
                              placeholder="N1"
                              onChange={(e) => onChangeValues(e, values, i, setValues, "n1")}
                            />
                          </label>
                          <div className="label">
                            <span className="label-text-alt text-error">{errors.linhas && typeof errors.linhas != "string" && (errors.linhas as Array<Values>) == errors.linhas ? errors.linhas[i].n1 : ""}</span>
                          </div>
                        </label>
                        <label className="form-control w-full max-w-xs">
                          <div className="label">
                            <span className="label-text">
                              qual o valor do peso inicial de N1?
                            </span>
                          </div>
                          <div className="tooltip" data-tip={vls.wn1}>
                            <input type="range" step={0.1} min={0} max="1" value={vls.wn1} onChange={(e) => onChangeValues(e, values, i, setValues, "wn1")} className="range range-xs" />
                          </div>
                          <div className="label">
                            <span className="label-text-alt text-error">{errors.linhas && typeof errors.linhas != "string" && (errors.linhas as Array<Values>) == errors.linhas ? errors.linhas[i].wn1 : ""}</span>
                          </div>
                        </label>
                        <label className="form-control w-full max-w-xs">
                          <div className="label">
                            <span className="label-text">qual o valor de N2?</span>
                          </div>
                          <label className="input input-bordered flex items-center gap-2">
                            N2
                            <input
                              type="number"
                              className="grow"
                              placeholder="N2"
                              onChange={(e) => onChangeValues(e, values, i, setValues, "n2")}
                            />
                          </label>
                          <div className="label">
                            <span className="label-text-alt text-error">{errors.linhas && typeof errors.linhas != "string" && (errors.linhas as Array<Values>) == errors.linhas ? errors.linhas[i].n2 : ""}</span>
                          </div>
                        </label>
                        <label className="form-control w-full max-w-xs">
                          <div className="label">
                            <span className="label-text">Informe o peso de N2?</span>
                          </div>
                          <div className="tooltip" data-tip={vls.wn2}>
                            <input type="range" step={0.1} min={0} max="1" value={vls.wn2} onChange={(e)=> onChangeValues(e, values, i, setValues, "wn2")} className="range range-xs" />
                          </div>
                          <div className="label">
                            <span className="label-text-alt text-error">{errors.linhas && typeof errors.linhas != "string" && (errors.linhas as Array<Values>) == errors.linhas ? errors.linhas[i].wn2 : ""}</span>
                          </div>
                        </label>
                        <label className="form-control w-full max-w-xs">
                          <div className="label">
                            <span className="label-text">
                              Informe o resultado esperado?
                            </span>
                          </div>
                          <label className="input input-bordered flex items-center gap-2">
                            Result
                            <input
                              type="number"
                              max={1}
                              min={0}
                              className="grow"
                              placeholder="resultado esperado"
                              onChange={(e) => onChangeValues(e, values, i, setValues, "expected_result")}
                            />
                          </label>
                          <div className="label">
                            <span className="label-text-alt text-error">{errors.linhas && typeof errors.linhas != "string" && (errors.linhas as Array<Values>) == errors.linhas ? errors.linhas[i].expected_result : ""}</span>
                          </div>
                        </label>
                        <div className="divider"></div>
                      </>
                    ))
                  }
                  <button onClick={() => addItem(values, setValues)} className="btn btn-circle btn-success" type="button">
                    <IoAdd size={20} />
                  </button>
                  <button className="btn btn-primary w-full" type="submit">
                    Calcular
                  </button>
                </form>
              );
            }}
          </Formik>
        </>
        )}
    </>
  );
};

export default FormCalcularPerceptron;
