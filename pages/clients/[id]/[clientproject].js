import {useRouter} from 'next/router'
function SelectedClientProjectPage(){
  console.log(useRouter())
  return (
      <div>
        <h1>The SelectedClientProject </h1>
      </div>
  )
}

export default SelectedClientProjectPage