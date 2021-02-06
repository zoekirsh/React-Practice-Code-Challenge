import React, { Fragment } from 'react'
import MoreButton from '../components/MoreButton'
import Sushi from '../components/Sushi'

const SushiContainer = (props) => {
  //console.log(props)
  return (
    <Fragment>
      <div className="belt">
        {
          props.sushis.map(sushi => <Sushi data={sushi} eatSushi={props.eatSushi} eaten={false}/>)
        }
        <MoreButton moreSushi={props.moreSushi}/>
      </div>
    </Fragment>
  )
}

export default SushiContainer