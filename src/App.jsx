import './App.css'
import React from 'react'
import Primeiro from './components/Primeiro'
import ComParametro from './components/ComParametro'
import ComFilhos from './components/ComFilhos'
import Card from "./components/layout/Card"
import Repeticao from './components/Repeticao'
import Condicional from './components/Condicional'
import CondicionalComIf from './components/CondicionalComIf'

export default props =>
    <div className="App">
        <Card titulo="#05 - Condicinal Com If">
            <CondicionalComIf numero="11"/>
        </Card>
        <Card titulo="#05 - Condicinal">
            <Condicional numero="10"/>
        </Card>
        <Card titulo="#04 - Repetição">
            <Repeticao/>
        </Card>
        <Card titulo="#03 - Componente Com Filhos">
            <ComFilhos>
                <ul>
                    <li>Ana</li>
                    <li>Bia</li>
                    <li>Carlos</li>
                    <li>Daniel</li>
                </ul>
            </ComFilhos>
        </Card>
        <Card titulo="#02 - Componente Com Parametro">
            <ComParametro titulo="Esse é o título"
                subtitulo="Esse é o subtítulo" />
            <ComParametro titulo="Opa" subtitulo="Epa" />
        </Card>
        <Card titulo="#01 - Primeiro Componente">
            <Primeiro />
        </Card>
    </div>