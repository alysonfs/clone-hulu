import { NextPage } from 'next'
import Thumbnail, { Result } from './Thumbnail'
import FlipMove from 'react-flip-move'

export type Results = Array<Result>

type ResultsProps = {
  results: Results
}

const Results: NextPage<ResultsProps> = ({ results }) => {
  return (
    <FlipMove className='px-5 my-10 sm:grid md:grid-cols-2 xl:grid-cols-3 2xl'>
      {results.map(result => (
        <Thumbnail key={result.id} result={result} />
      ))}
    </FlipMove>
  )
}

export default Results
