import SackDollar from '../../assets/Icons/SackDollar'
import MoneyBillWave from '../../assets/Icons/MoneyBillWave'
import Pix from '../../assets/Icons/Pix'
import CreditCard from '../../assets/Icons/CreditCard'

import ScrewdriverWrench from '../../assets/Icons/ScrewdriverWrench'
import CircleCheck from '../../assets/Icons/CircleCheck'
import { Link, useNavigate } from 'react-router-dom'
import { useEffect } from 'react'

// Values Brute
let money = 258
let pix = 27
let debitCard = 34.50 
let creditCard = 13.30 

// Tax Card
let taxDebit = ((debitCard * 1.99) / 100).toFixed(2)
let taxCredit = ((creditCard * 4.74) / 100).toFixed(2)
console.log(`Taxa Débito: ${taxDebit}`)
console.log(`Taxa Crédito: ${taxCredit}`)

let debitCardFinal = debitCard - taxDebit // 33,81
let creditCardFinal = creditCard - taxCredit // 12,67
console.log(`Débito sem a Taxa: ${debitCardFinal}`)
console.log(`Crédito sem a Taxa: ${creditCardFinal}`)

// Values Final
let moneyPix = money + pix // 285
console.log(`Din + Pix: ${moneyPix}`)

let amountCards = (debitCardFinal + creditCardFinal) //  46,48
console.log(`Valor Total em Cartões: ${amountCards}`)

let amount = (moneyPix + amountCards) // 331,48
console.log(`Total: ${amount}`)

export default function Invoicing() {
   const navigate = useNavigate()

   useEffect(() => {
      window.addEventListener('keydown', event => {
         if(event.keyDown === 119) {
            navigate('/')
         }
      })
   }, [])

   return(
      <main className="container flex">
         <div className="forms">
         <form action='/' className="invoicingOfTheDayForm w-100 h-100 f column sbt">
            <h4 className="flex sar">
               Faturamento do Dia
               <SackDollar w='24' h='24' fill='var(--bs-info)' className='' />
            </h4>

            <div className="inputForm f aic sbt bb-info"> {/* Dinheiro */}
               <p className='inputTF'>Dinheiro</p>

               <div className="valueOfTheDay borderForm flex">
                  <MoneyBillWave w='24' h='24' fill='var(--bs-success)' className='mr-1' />
                  <p className='inputTF text-success'>
                     {/* 0,00 */}
                     { money.toFixed(2) }
                  </p>
               </div>
            </div>

            <div className="inputForm f aic sbt bb-info">  {/* Pix */}
               <p className='inputTF'>Pix</p>

               <div className="valueOfTheDay borderForm flex">
                  <Pix w='24' h='24' fill='var(--pix)' className='mr-1' />
                  <p className='inputTF text-pix'>
                     {/* 0,00 */}
                     { pix.toFixed(2) }
                  </p>
               </div>
            </div>

            <div className="inputForm f aic sbt bb-info">  {/* Débito */}
               <p className='inputTF'>Débito</p>
               <span className="calcCard flex column">
                  <ScrewdriverWrench w='12' h='12' fill='var(--blue-mp)' className='mr-1' />
                  <span className='calcCardText text-blue-mp'>
                     (0,00 - 1,99%)
                  </span>
               </span>

               <div className="valueOfTheDay borderForm flex">
                  <CreditCard w='24' h='24' fill='var(--blue-mp)' className='mr-1' />
                  <p className='inputTF text-blue-mp'>
                     {/* 0,00 */}
                     { debitCardFinal.toFixed(2) }
                  </p>
               </div>
            </div>

            <div className="inputForm f aic sbt bb-info">  {/* Crédito */}
               <p className='inputTF'>Crédito</p>

               <span className="calcCard flex column">
                  <ScrewdriverWrench w='12' h='12' fill='var(--yellow-ml)' className='mr-1' />
                  <span className='calcCardText text-yellow-ml'>
                     (0,00 - 4,74%)
                  </span>
               </span>

               <div className="valueOfTheDay borderForm flex">
                  <CreditCard w='24' h='24' fill='var(--yellow-ml)' className='mr-1' />
                  <p className='inputTF text-yellow-ml'>
                     {/* 0,00 */}
                     { creditCardFinal.toFixed(2) }
                  </p>
               </div>
            </div>

            <div className="inputForm f aic sbt bb-info">  {/* Dinheiro & Pix - moneyPix */}
               <p className='inputTF'>Dinheiro & Pix</p>

               <div className="valueOfTheDay borderForm flex">
                  <span className='inputTF flex'>
                     <MoneyBillWave w='24' h='24' fill='var(--bs-success)' className='mr-1' /> 
                     <span className="mr-1">+</span>
                     <Pix w='24' h='24' fill='var(--pix)' className='mr-1' />
                  </span>
                  <p className='inputTF text-success'>
                     {/* 0,00 */}
                     { moneyPix.toFixed(2) }
                  </p>
               </div>
            </div>

            <div className="inputForm f aic sbt bb-info">  {/* Cartões - amountCards */}
               <p className='inputTF'>Cartões</p>

               <div className="valueOfTheDay borderForm flex">
                  <span className='inputTF flex'>
                     <CreditCard w='24' h='24' fill='var(--blue-mp)' className='mr-1' /> 
                     <span className="mr-1">+</span>
                     <CreditCard w='24' h='24' fill='var(--yellow-ml)' className='mr-1' />
                  </span>
                  <p className='inputTF text-blue-mp'>
                     {/* 0,00 */}
                     { amountCards.toFixed(2) }
                  </p>
               </div>
            </div>

            <div className="inputForm f aic sbt bb-info">  {/* Tudo - amount */}
               <p className='inputTF'>Total</p>

               <div className="valueOfTheDay borderForm flex">
                  <span className='inputTF flex'>
                     <MoneyBillWave w='24' h='24' fill='var(--bs-success)' className='mr-1' />
                     <span className="mr-1">+</span>
                     <Pix w='24' h='24' fill='var(--pix)' className='mr-1' />
                     <span className="mr-1">+</span>
                     <CreditCard w='24' h='24' fill='var(--blue-mp)' className='mr-1' /> 
                     <span className="mr-1">+</span>
                     <CreditCard w='24' h='24' fill='var(--yellow-ml)' className='mr-1' />
                  </span>
                  <p className='inputTF text-success'>
                     {/* 0,00 */}
                     { amount.toFixed(2) }
                  </p>
               </div>
            </div>

            <Link to='/' className="btn btn-success mt-1" >
               Confirmar Valores (F8)
               <CircleCheck w='24' h='24' fill='var(--text)' className='ml-1' />
            </Link>
         </form>
         </div>
      </main>
   )
}