import { Continente } from './app/continente';

export const Dados : Continente[]=[

{continente:"America",
foto:"",
confirmados:"50.658.987",
mortes:"20.698.877",
recuperados:"35.852.456",
ativos:"120.587.987",
gastos:"125.580.654",
lockdown:"35",
leitosocupados:"12.500"
},
{continente:"Europa",
foto:"",
confirmados:"50.658.987",
mortes:"20.698.877",
recuperados:"35.852.456",
ativos:"120.587.987",
gastos:"125.580.654",
lockdown:"35",
leitosocupados:"12.500"
},
{continente:"Africa",
foto:"",
confirmados:"50.658.987",
mortes:"20.698.877",
recuperados:"35.852.456",
ativos:"120.587.987",
gastos:"125.580.654",
lockdown:"35",
leitosocupados:"12.500"
},
{continente:"Oceania",
foto:"",
confirmados:"50.658.987",
mortes:"20.698.877",
recuperados:"35.852.456",
ativos:"120.587.987",
gastos:"125.580.654",
lockdown:"35",
leitosocupados:"12.500"
}
]


colocar em continente.ts
export class Continente{

continente:string;
foto:string;
confirmados:string;
mortes:string;
recuperados:string
ativos:string;
gastos:string;
lockdown:string;
leitosocupados:string;
}
