import React, {useState} from 'react'
import {GiHamburgerMenu} from 'react-icons/gi'
import {MdBackspace} from 'react-icons/md'

const CalculatorApp = () => {

    // declaring state 
    const [number, setNumber] = useState('')

    // handle click
    const handleClick = (e) => {
        setNumber(number.concat(e.target.value))
    }

    // handle clear 
    const handleClear = () => {
        setNumber('')
    }

    // handle slice
    const handleSlice = () => {
        setNumber(number.slice(0, -1))

    }

    // handle answer 
    const handleAnswer = () =>{
        try{
            setNumber(eval(number).toString())
        }catch(error){
            setNumber('Invalid')
        }
    }


    return (
        <React.Fragment>
            <div className='bg-gray-400 h-screen'>
           <section>
            
               <div className="bg-gray-600 w-96 h-screen mx-auto rounded-lg overflow-hidden">
                   <div className='text-black w-full font-extrabold text-3xl h-16 flex items-center space-x-2 pl-2'>
                       <GiHamburgerMenu/>
                       <p>CALCULATOR</p>
                   </div>

                   {/* screen */}
                   <div className=' h-20 '>
                       <input
                       type='text'
                       placeholder='0'
                       value={number}
                       className=' w-full h-full font-extrabold border border-white text-black bg-gray-200 text-4xl text-right pr-5 '
                        />
                   </div>

                   {/* keypad */}
                   <div className='grid grid-cols-4 gap-2 my-5 mx-3'>
                       <button onClick={handleClear} className='text-red-600  bg-white w-20 h-20 rounded-lg font-bold text-3xl flex justify-center items-center shadow'>AC</button>
                       <button onClick={handleSlice} className='text-green-600  bg-white w-20 h-20 rounded-lg font-bold text-3xl flex justify-center items-center shadow'><MdBackspace/></button>
                       <button value='/' onClick={handleClick} className='text-green-600  bg-white w-20 h-20 rounded-lg font-bold text-3xl flex justify-center items-center shadow'>/</button>
                       <button value='+' onClick={handleClick} className='text-green-600  bg-white w-20 h-40 rounded-lg font-bold text-3xl flex justify-center items-center shadow row-span-2'>+</button>


                       <button value='9' onClick={handleClick} className='text-white w-20 h-20 bg-indigo-600 rounded-lg font-bold text-3xl flex justify-center items-center shadow'>9</button> 
                       <button value='8' onClick={handleClick} className='text-white w-20 h-20 bg-indigo-600 rounded-lg font-bold text-3xl flex justify-center items-center shadow'>8</button>
                       <button value='7' onClick={handleClick} className='text-white w-20 h-20 bg-indigo-600 rounded-lg font-bold text-3xl flex justify-center items-center shadow'>7</button>

                       <button value='4' onClick={handleClick} className='text-white w-20 h-20 bg-indigo-600 rounded-lg font-bold text-3xl flex justify-center items-center shadow'>4</button>
                       <button value='5' onClick={handleClick} className='text-white w-20 h-20 bg-indigo-600 rounded-lg font-bold text-3xl flex justify-center items-center shadow'>5</button>
                       <button value='6' onClick={handleClick} className='text-white w-20 h-20 bg-indigo-600 rounded-lg font-bold text-3xl flex justify-center items-center shadow'>6</button>
                       <button value='-' onClick={handleClick} className='text-green-600  bg-white w-20 h-20 rounded-lg font-bold text-3xl flex justify-center items-center shadow'>-</button>

                       <button value='1' onClick={handleClick} className='text-white w-20 h-20 bg-indigo-600 rounded-lg font-bold text-3xl flex justify-center items-center shadow'>1</button>
                       <button value='2' onClick={handleClick} className='text-white w-20 h-20 bg-indigo-600 rounded-lg font-bold text-3xl flex justify-center items-center shadow'>2</button>
                       <button value='3' onClick={handleClick} className='text-white w-20 h-20 bg-indigo-600 rounded-lg font-bold text-3xl flex justify-center items-center shadow'>3</button>
                       <button value='*' onClick={handleClick} className='text-green-600   bg-white w-20 h-20 rounded-lg font-bold text-3xl flex justify-center items-center shadow'>X</button>

                       <button value='.' onClick={handleClick} className='text-white w-20 h-20 bg-indigo-600 rounded-lg font-bold text-3xl flex justify-center items-center shadow'>.</button>
                       <button value='0' onClick={handleClick} className='text-white w-20 h-20 bg-indigo-600 rounded-lg font-bold text-3xl flex justify-center items-center shadow'>0</button>
                       <button onClick={handleAnswer} className='text-black  bg-red-600 w-42 h-20 rounded-lg font-bold text-3xl flex justify-center items-center shadow col-span-2'>=</button>
        
                   </div>
                   
               </div>
               
           </section>
           </div>
        </React.Fragment>
    )
}

export default CalculatorApp