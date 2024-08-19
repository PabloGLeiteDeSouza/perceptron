"use client";
import { Formik } from "formik";
import { onSubmit } from "./functions";
import * as Yup from "yup";

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
  return (
    <>
      <Formik
        initialValues={{
          bias: "",
          wbias: "",
          n1: "",
          wn1: "",
          n2: "",
          wn2: "",
          expected_result: "",
        }}
        validationSchema={validationSchema}
        onSubmit={onSubmit}
      >
        {({ handleChange, handleSubmit, errors }) => {
          return (
            <form
              onSubmit={handleSubmit}
              className="flex flex-col gap-5 items-center"
            >
              <label className="form-control w-full max-w-xs">
                <div className="label">
                  <span className="label-text">Informe o valor do Bias?</span>
                </div>
                <label className="input input-bordered flex items-center gap-2">
                  Bias
                  <input type="number" className="grow" placeholder="Bias" onChange={handleChange('bias')} />
                </label>
                <div className="label">
                  <span className="label-text-alt text-error">{errors.bias}</span>
                </div>
              </label>
              <label className="form-control w-full max-w-xs">
                <div className="label">
                  <span className="label-text">
                    Informe o valor do peso do Bias?
                  </span>
                </div>
                <label className="input input-bordered flex items-center gap-2">
                  WBias
                  <input
                    type="number"
                    className="grow"
                    placeholder="Peso do Bias"
                    onChange={handleChange("wbias")}
                  />
                </label>
                <div className="label">
                  <span className="label-text-alt text-error">{errors.wbias}</span>
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
                    onChange={handleChange("n1")}
                  />
                </label>
                <div className="label">
                  <span className="label-text-alt text-error">{errors.n1}</span>
                </div>
              </label>
              <label className="form-control w-full max-w-xs">
                <div className="label">
                  <span className="label-text">
                    qual o valor do peso de N1?
                  </span>
                </div>
                <label className="input input-bordered flex items-center gap-2">
                  WN1
                  <input
                    type="number"
                    className="grow"
                    placeholder="Peso N1"
                    onChange={handleChange("wn1")}
                  />
                </label>
                <div className="label">
                  <span className="label-text-alt text-error">{errors.wn1}</span>
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
                    onChange={handleChange("n2")}
                  />
                </label>
                <div className="label">
                  <span className="label-text-alt text-error">{errors.n2}</span>
                </div>
              </label>
              <label className="form-control w-full max-w-xs">
                <div className="label">
                  <span className="label-text">Informe o peso de N2?</span>
                </div>
                <label className="input input-bordered flex items-center gap-2">
                  WN2
                  <input
                    type="number"
                    className="grow"
                    placeholder="Peso N2"
                    onChange={handleChange("wn2")}
                  />
                </label>
                <div className="label">
                  <span className="label-text-alt text-error">{errors.wn2}</span>
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
                    className="grow"
                    placeholder="resultado esperado"
                    onChange={handleChange("expected_result")}
                  />
                </label>
                <div className="label">
                  <span className="label-text-alt text-error">{errors.expected_result}</span>
                </div>
              </label>
              <button className="btn btn-primary w-full" type="submit">
                Calcular
              </button>
            </form>
          );
        }}
      </Formik>
    </>
  );
};

export default FormCalcularPerceptron;
