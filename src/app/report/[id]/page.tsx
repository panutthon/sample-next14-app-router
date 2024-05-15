import React from 'react'

type Props = {
    params: {
        id: string;
    }
    
}

function Report({params}: Props) {
  return (
    <div>Report id: { params.id }</div>
  )
}

export default Report