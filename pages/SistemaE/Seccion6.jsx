import React, { useState, useEffect } from "react";
import styles from "../../styles/Home.module.css";

function Seccion6(props) {
  const { onCheckboxChange } = props;
  const [ch1, setCh1] = useState(false);
  const [ch2, setCh2] = useState(false);
  const [ch3, setCh3] = useState(false);
  const [ch4, setCh4] = useState(false);
  const [ch5, setCh5] = useState(false);
  const [ch6, setCh6] = useState(false);
  const [ch7, setCh7] = useState(false);
  const [ch8, setCh8] = useState(false);
  const [ch9, setCh9] = useState(false);
  const [ch10, setCh10] = useState(false);
  const [ch11, setCh11] = useState(false);
  const [ch12, setCh12] = useState(false);
  const [ch13, setCh13] = useState(false);
  const [Ninguno, setNinguno] = useState(false);
  const [Todos, setTodos] = useState(false);

  function handleNoneClick() {
    setNinguno(!Ninguno);
    if (!Ninguno) {
      setCh1(false);
      setCh2(false);
      setCh3(false);
      setCh4(false);
      setCh5(false);
      setCh6(false);
      setCh7(false);
      setCh8(false);
      setCh9(false);
      setCh10(false);
      setCh11(false);
      setCh12(false);
      setCh13(false);
      setTodos(false);
    }
  }
  function handleAllClick() {
    setTodos(!Todos);
    if (!Todos) {
      setNinguno(false);
      setCh1(true);
      setCh2(true);
      setCh3(true);
      setCh4(true);
      setCh5(true);
      setCh6(true);
      setCh7(true);
      setCh8(true);
      setCh9(true);
      setCh10(true);
      setCh11(true);
      setCh12(true);
      setCh13(true);
      setTodos(true);
    }
  }
  function handleChClick(name) {
    setNinguno(false);
    setTodos(false);
    if (name === "Bandaresistencia") setCh1(!ch1);
    if (name === "Bandasuspension") setCh2(!ch2);
    if (name === "Barra") setCh3(!ch3);
    if (name === "BarraZ") setCh4(!ch4);
    if (name === "Barras") setCh5(!ch5);
    if (name === "Mancuernas") setCh6(!ch6);
    if (name === "PesaRusa") setCh7(!ch7);
    if (name === "PlacaPeso") setCh8(!ch8);
    if (name === "MaquinasGYM") setCh9(!ch9);
    if (name === "BancoPlano") setCh10(!ch10);
    if (name === "BancoDeclinado") setCh11(!ch11);
    if (name === "BancoInclinado") setCh12(!ch12);
    if (name === "Cuerda") setCh13(!ch13);
  }
  return (
    <div>
      <div className="grid place-items-center">
        <div className="font-catamaran text-2xl md:text-3xl bg-gradient-to-r from-blue-600 via-blue-800 to-black bg-clip-text text-transparent mt-7 font-bold text-center">
          <h1>¿Qué herramientas tienes disponibles?</h1>
        </div>
      </div>
      <br />
      <br />

      {/* <ul className="items-center w-full text-sm font-medium text-gray-900 bg-white border border-gray-200 rounded-lg sm:flex ">
        <li className="w-full border-b border-gray-200 sm:border-b-0 sm:border-r secc4:border-gray-600">
          <div className="flex items-center pl-3">
            <input
              id="ch1"
              type="checkbox"
              name="Ninguno"
              onChange={onCheckboxChange}
              onClick={handleNoneClick}
              checked={Ninguno} 
              className="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 rounded"
            />
            <label
              htmlFor="ch1"
              className="w-full py-3 ml-2 text-sm font-medium text-gray-900"
            >
              Ninguno
            </label>
          </div>
        </li>
        <li className="w-full border-b border-gray-200 sm:border-b-0 sm:border-r">
          <div className="flex items-center pl-3">
            <input
              id="ch2"
              type="checkbox"
              name="Bandaresistencia"
              checked={ch1} onClick={() => handleChClick("Bandaresistencia")}
              onChange={onCheckboxChange}
              className="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 rounded"
            />
            <label
              htmlFor="ch2"
              className="w-full py-3 ml-2 text-sm font-medium text-gray-900 "
            >
              Banda de Resistencia
            </label>
          </div>
        </li>
        <li className="w-full border-b border-gray-200 sm:border-b-0 sm:border-r ">
          <div className="flex items-center pl-3">
            <input
              id="ch3"
              type="checkbox"
              name="Bandasuspension"
              onChange={onCheckboxChange}
              checked={ch2} onClick={() => handleChClick("Bandasuspension")}
              className="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 rounded "
            />
            <label
              htmlFor="ch3"
              className="w-full py-3 ml-2 text-sm font-medium text-gray-900"
            >
              Banda de suspensión
            </label>
          </div>
        </li>
        <li className="w-full ">
          <div className="flex items-center pl-3">
            <input
              id="ch4"
              type="checkbox"
              name="Barra"
              checked={ch3} onClick={() => handleChClick("Barra")}
              onChange={onCheckboxChange}
              className="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 rounded "
            />
            <label
              htmlFor="ch4"
              className="w-full py-3 ml-2 text-sm font-medium text-gray-900 "
            >
              Barra
            </label>
          </div>
        </li>
      </ul>

      <ul className="items-center w-full text-sm font-medium text-gray-900 bg-white border border-gray-200 rounded-lg sm:flex">
        <li className="w-full border-b border-gray-200 sm:border-b-0 sm:border-r ">
          <div className="flex items-center pl-3">
            <input
              id="ch5"
              type="checkbox"
              name="BarraZ"
              checked={ch4} onClick={() => handleChClick("BarraZ")}
              onChange={onCheckboxChange}
              className="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 rounded "
            />
            <label
              htmlFor="ch5"
              className="w-full py-3 ml-2 text-sm font-medium text-gray-900"
            >
              Barra Z
            </label>
          </div>
        </li>
        <li className="w-full border-b border-gray-200 sm:border-b-0 sm:border-r ">
          <div className="flex items-center pl-3">
            <input
              id="ch6"
              type="checkbox"
              name="Barras"
              checked={ch5} onClick={() => handleChClick("Barras")}
              onChange={onCheckboxChange}
              className="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 rounded"
            />
            <label
              htmlFor="ch6"
              className="w-full py-3 ml-2 text-sm font-medium text-gray-900 "
            >
              Barras dominadas, paralelas
            </label>
          </div>
        </li>
        <li className="w-full border-b border-gray-200 sm:border-b-0 sm:border-r">
          <div className="flex items-center pl-3">
            <input
              id="ch8"
              type="checkbox"
              name="Mancuernas"
              checked={ch6} onClick={() => handleChClick("Mancuernas")}
              onChange={onCheckboxChange}
              className="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 rounded"
            />
            <label
              htmlFor="ch8"
              className="w-full py-3 ml-2 text-sm font-medium text-gray-900 "
            >
              Mancuernas
            </label>
          </div>
        </li>
        <li className="w-full border-b border-gray-200 sm:border-b-0 sm:border-r ">
          <div className="flex items-center pl-3">
            <input
              id="ch9"
              type="checkbox"
              name="PesaRusa"
              checked={ch7} onClick={() => handleChClick("PesaRusa")}
              onChange={onCheckboxChange}
              className="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 rounded"
            />
            <label
              htmlFor="ch9"
              className="w-full py-3 ml-2 text-sm font-medium text-gray-900 "
            >
              Pesa Rusa
            </label>
          </div>
        </li>
      </ul>

      <ul className="items-center w-full text-sm font-medium text-gray-900 bg-white border border-gray-200 rounded-lg sm:flex mt-1">
        <li className="w-full border-b border-gray-200 sm:border-b-0 sm:border-r">
          <div className="flex items-center pl-3">
            <input
              id="ch10"
              type="checkbox"
              name="PlacaPeso"
              checked={ch8} onClick={() => handleChClick("PlacaPeso")}
              onChange={onCheckboxChange}
              className="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 rounded"
            />
            <label
              htmlFor="ch10"
              className="w-full py-3 ml-2 text-sm font-medium text-gray-900"
            >
              Placa de Peso
            </label>
          </div>
        </li>
        <li className="w-full border-b border-gray-200 sm:border-b-0 sm:border-r ">
          <div className="flex items-center pl-3">
            <input
              id="ch11"
              type="checkbox"
              name="MaquinasGYM"
              checked={ch9} onClick={() => handleChClick("MaquinasGYM")}
              onChange={onCheckboxChange}
              className="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 rounded"
            />
            <label
              htmlFor="ch11"
              className="w-full py-3 ml-2 text-sm font-medium text-gray-900"
            >
              Máquinas en GYM
            </label>
          </div>
        </li>
        <li className="w-full border-b border-gray-200 sm:border-b-0 sm:border-r">
          <div className="flex items-center pl-3">
            <input
              id="ch12"
              type="checkbox"
              name="BancoPlano"
              checked={ch10} onClick={() => handleChClick("BancoPlano")}
              onChange={onCheckboxChange}
              className="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 rounded"
            />
            <label
              htmlFor="ch12"
              className="w-full py-3 ml-2 text-sm font-medium text-gray-900 "
            >
              Banco Plano
            </label>
          </div>
        </li>
        <li className="w-full border-b border-gray-200 sm:border-b-0 sm:border-r">
          <div className="flex items-center pl-3">
            <input
              id="ch13"
              type="checkbox"
              name="BancoDeclinado"
              checked={ch11} onClick={() => handleChClick("BancoDeclinado")}
              onChange={onCheckboxChange}
              className="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 rounded"
            />
            <label
              htmlFor="ch13"
              className="w-full py-3 ml-2 text-sm font-medium text-gray-900"
            >
              Banco Declinado
            </label>
          </div>
        </li>
      </ul>

      <ul className="items-center w-full text-sm font-medium text-gray-900 bg-white border border-gray-200 rounded-lg sm:flex">
        <li className="w-full border-b border-gray-200 sm:border-b-0 sm:border-r ">
          <div className="flex items-center pl-3">
            <input
              id="ch14"
              type="checkbox"
              name=" BancoInclinado"
              checked={ch12} onClick={() => handleChClick("BancoInclinado")}
              onChange={onCheckboxChange}
              className="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 rounded"
            />
            <label
              htmlFor="ch14"
              className="w-full py-3 ml-2 text-sm font-medium text-gray-900 "
            >
              Banco Inclinado
            </label>
          </div>
        </li>
        <li className="w-full border-b border-gray-200 sm:border-b-0 sm:border-r ">
          <div className="flex items-center pl-3">
            <input
              id="ch15"
              type="checkbox"
              name="Cuerda"
              checked={ch13} onClick={() => handleChClick("Cuerda")}
              onChange={onCheckboxChange}
              className="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 rounded"
            />
            <label
              htmlFor="ch15"
              className="w-full py-3 ml-2 text-sm font-medium text-gray-900 "
            >
              Cuerda
            </label>
          </div>
        </li>
        <li className="w-full border-b border-gray-200 sm:border-b-0 sm:border-r ">
          <div className="flex items-center pl-3">
            <input
              id="ch16"
              type="checkbox"
              name="Todos"
              onChange={onCheckboxChange}
              checked={Todos} onClick={handleAllClick}
              className="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 rounded"
            />
            <label
              htmlFor="ch16"
              className="w-full py-3 ml-2 text-sm font-medium text-gray-900"
            >
              Todos
            </label>
          </div>
        </li>

        <li className="w-full border-b border-gray-200 sm:border-b-0 sm:border-r ">
          <div className="flex items-center pl-3">
            <label
              className="w-full py-3 ml-2 text-sm font-medium text-gray-900"
            ></label>
          </div>
        </li>
      </ul> */}

      <div className="grid place-items-center">
        <section className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5">
          <article className="feature-2">
            <input
              id="ch1"
              type="checkbox"
              name="Ninguno"
              onChange={onCheckboxChange}
              onClick={handleNoneClick}
              checked={Ninguno} 
              className="inputArticle-2"
            />
            <div className="divArticle-2 flex flex-col gap-3">
              <div className="grid place-items-center mt-7">
                <div className="h-8 w-8 mt-5">
                  <img src="img/other.png"></img>
                </div>
              </div>
              <span className="font-semibold text-center mb-10">Ninguno</span>
            </div>
          </article>

          <article className="feature-2">
            <input
               id="ch2"
               type="checkbox"
               name="Bandaresistencia"
               checked={ch1} onClick={() => handleChClick("Bandaresistencia")}
               onChange={onCheckboxChange}
              className="inputArticle-2"
            />
            <div className="divArticle-2 flex flex-col gap-3">
              <div className="grid place-items-center mt-7">
                <div className="h-8 w-8 mt-5">
                  <img src="img/other.png"></img>
                </div>
              </div>
              <span className="font-semibold text-center mb-10">Banda de Resistencia</span>
            </div>
          </article>

          <article className="feature-2">
            <input
              id="ch3"
              type="checkbox"
              name="Bandasuspension"
              onChange={onCheckboxChange}
              checked={ch2} onClick={() => handleChClick("Bandasuspension")}
              className="inputArticle-2"
            />
            <div className="divArticle-2 flex flex-col gap-3">
              <div className="grid place-items-center mt-7">
                <div className="h-8 w-8 mt-5">
                  <img src="img/other.png"></img>
                </div>
              </div>
              <span className="font-semibold text-center mb-10">Banda de suspensión</span>
            </div>
          </article>

          <article className="feature-2">
            <input
              id="ch4"
              type="checkbox"
              name="Barra"
              checked={ch3} onClick={() => handleChClick("Barra")}
              onChange={onCheckboxChange}
              className="inputArticle-2"
            />
            <div className="divArticle-2 flex flex-col gap-3">
              <div className="grid place-items-center mt-7">
                <div className="h-8 w-8 mt-5">
                  <img src="img/other.png"></img>
                </div>
              </div>
              <span className="font-semibold text-center mb-10">Barra</span>
            </div>
          </article>

          <article className="feature-2">
            <input
              id="ch5"
              type="checkbox"
              name="BarraZ"
              checked={ch4} onClick={() => handleChClick("BarraZ")}
              onChange={onCheckboxChange}
              className="inputArticle-2"
            />
            <div className="divArticle-2 flex flex-col gap-3">
              <div className="grid place-items-center mt-7">
                <div className="h-8 w-8 mt-5">
                  <img src="img/other.png"></img>
                </div>
              </div>
              <span className="font-semibold text-center mb-10">Barra Z</span>
            </div>
          </article>

          <article className="feature-2">
            <input
             id="ch6"
             type="checkbox"
             name="Barras"
             checked={ch5} onClick={() => handleChClick("Barras")}
             onChange={onCheckboxChange}
              className="inputArticle-2"
            />
            <div className="divArticle-2 flex flex-col gap-3">
            <div className="grid place-items-center mt-7">
                <div className="h-8 w-8 mt-5">
                  <img src="img/other.png"></img>
                </div>
              </div>
              <span className="font-semibold text-center mb-10">Barras dominadas</span>
            </div>
          </article>

          <article className="feature-2">
            <input
               id="ch8"
               type="checkbox"
               name="Mancuernas"
               checked={ch6} onClick={() => handleChClick("Mancuernas")}
               onChange={onCheckboxChange}
              className="inputArticle-2"
            />
            <div className="divArticle-2 flex flex-col gap-3">
            <div className="grid place-items-center mt-7">
                <div className="h-8 w-8 mt-5">
                  <img src="img/other.png"></img>
                </div>
              </div>
              <span className="font-semibold text-center mb-10">Mancuernas</span>
            </div>
          </article>

          <article className="feature-2">
            <input
             id="ch9"
             type="checkbox"
             name="PesaRusa"
             checked={ch7} onClick={() => handleChClick("PesaRusa")}
             onChange={onCheckboxChange}
              className="inputArticle-2"
            />
            <div className="divArticle-2 flex flex-col gap-3">
               <div className="grid place-items-center mt-7">
                <div className="h-8 w-8 mt-5">
                  <img src="img/other.png"></img>
                </div>
              </div>
              <span className="font-semibold text-center mb-10">Pesa Rusa</span>
            </div>
          </article>

          <article className="feature-2">
            <input
             id="ch10"
             type="checkbox"
             name="PlacaPeso"
             checked={ch8} onClick={() => handleChClick("PlacaPeso")}
             onChange={onCheckboxChange}
              className="inputArticle-2"
            />
            <div className="divArticle-2 flex flex-col gap-3">
               <div className="grid place-items-center mt-7">
                <div className="h-8 w-8 mt-5">
                  <img src="img/other.png"></img>
                </div>
              </div>
              <span className="font-semibold text-center mb-10">Placa de Peso</span>
            </div>
          </article>

          <article className="feature-2">
            <input
              id="ch11"
              type="checkbox"
              name="MaquinasGYM"
              checked={ch9} onClick={() => handleChClick("MaquinasGYM")}
              onChange={onCheckboxChange}
              className="inputArticle-2"
            />
            <div className="divArticle-2 flex flex-col gap-3">
               <div className="grid place-items-center mt-7">
                <div className="h-8 w-8 mt-5">
                  <img src="img/other.png"></img>
                </div>
              </div>
              <span className="font-semibold text-center mb-10">Máquinas en GYM</span>
            </div>
          </article>

          <article className="feature-2">
            <input
               id="ch12"
               type="checkbox"
               name="BancoPlano"
               checked={ch10} onClick={() => handleChClick("BancoPlano")}
               onChange={onCheckboxChange}
              className="inputArticle-2"
            />
            <div className="divArticle-2 flex flex-col gap-3">
            <div className="grid place-items-center mt-7">
                <div className="h-8 w-8 mt-5">
                  <img src="img/other.png"></img>
                </div>
              </div>
              <span className="font-semibold text-center mb-10">Banco plano</span>
            </div>
          </article>

          <article className="feature-2">
            <input
              id="ch13"
              type="checkbox"
              name="BancoDeclinado"
              checked={ch11} onClick={() => handleChClick("BancoDeclinado")}
              onChange={onCheckboxChange}
              className="inputArticle-2"
            />
            <div className="divArticle-2 flex flex-col gap-3">
            <div className="grid place-items-center mt-7">
                <div className="h-8 w-8 mt-5">
                  <img src="img/other.png"></img>
                </div>
              </div>
              <span className="font-semibold text-center mb-10">Banco declinado</span>
            </div>
          </article>

          <article className="feature-2">
            <input
              id="ch14"
              type="checkbox"
              name=" BancoInclinado"
              checked={ch12} onClick={() => handleChClick("BancoInclinado")}
              onChange={onCheckboxChange}
              className="inputArticle-2"
            />
            <div className="divArticle-2 flex flex-col gap-3">
               <div className="grid place-items-center mt-7">
                <div className="h-8 w-8 mt-5">
                  <img src="img/other.png"></img>
                </div>
              </div>
              <span className="font-semibold text-center mb-10">Banco inclinado</span>
            </div>
          </article>

          <article className="feature-2">
            <input
               id="ch15"
               type="checkbox"
               name="Cuerda"
               checked={ch13} onClick={() => handleChClick("Cuerda")}
               onChange={onCheckboxChange}
              className="inputArticle-2"
            />
            <div className="divArticle-2 flex flex-col gap-3">
               <div className="grid place-items-center mt-7">
                <div className="h-8 w-8 mt-5">
                  <img src="img/other.png"></img>
                </div>
              </div>
              <span className="font-semibold text-center mb-10">Cuerda</span>
            </div>
          </article>

          <article className="feature-2">
            <input
              id="ch16"
              type="checkbox"
              name="Todos"
              onChange={onCheckboxChange}
              checked={Todos} onClick={handleAllClick}
              className="inputArticle-2"
            />
            <div className="divArticle-2 flex flex-col gap-3">
               <div className="grid place-items-center mt-7">
                <div className="h-8 w-8 mt-5">
                  <img src="img/other.png"></img>
                </div>
              </div>
              <span className="font-semibold text-center mb-10">Todos</span>
            </div>
          </article>

        </section>
      </div>

      <br />
      <br />
      <br />
      <br />
    </div>
  );
}

export default Seccion6;
