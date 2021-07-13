import {Image, Transformation} from 'cloudinary-react'


const Test = () => (

        <Image className={'hello'} cloudName="dmkch2bnk" publicId="team/ljihhbfjgzuplcedrjas">
            <Transformation width="400"  gravity="south" crop="fill" />
        </Image>

)

export default Test
