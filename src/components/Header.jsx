
import { Box, Image, Link, StackView, Divider, Spacer, Search } from '@telus-uds/components-web'
import './search.css'
import TELUSlogo from '../assets/TELUS_Logo.png'

function Header() {
    return (
        <Box vertical={5} >
            <StackView direction="row" space={5}>

                <Image src={TELUSlogo} alt="image" width={120} height={80} />
                <Search />



            </StackView>
            <Spacer space={3} />
            <StackView direction="row" space={5} >



                <Link variant={{ alternative: true }} >Home</Link>
                <Link variant={{ alternative: true }} >Contact</Link>
                <Link variant={{ alternative: true }} >About us</Link>

            </StackView>
            <Divider space={5} />
        </Box>


    )
}

export default Header