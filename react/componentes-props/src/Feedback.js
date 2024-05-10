//rfce: react function component export

import React from 'react'

function Feedback({funcaoOK, funcaoNOK, textoOK, textoNOK}) {
  return (
    <div
      className='d-flex justify-content-evenly m-2'>
        {/* button[type=button].btn.btn-*2 */}
        <button 
          type="button" 
          className="btn btn-primary"
          onClick={() => funcaoOK()}>
          {textoOK}
        </button>
        <button 
          type="button" 
          className="btn btn-danger"
          onClick={function(){funcaoNOK()}}>
          {textoNOK}
        </button>
    </div>
  )

}

export default Feedback