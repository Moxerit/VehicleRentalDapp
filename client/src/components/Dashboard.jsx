import CurrentTotals from "./CurrentTotals"
import { Stack, Box, Flex, Center } from "@chakra-ui/react"
import Vehicle from "./Vehicle"
import V1 from '../assets/v1.jpg'
import V2 from '../assets/v2.jpg'
import V3 from '../assets/v3.jpg'
import RenterForm from "./RenterForm"
import { useContext, useState } from "react"
import { BlockchainContext } from "../context/BlockchainContext"
import ClipLoader from "react-spinners/ClipLoader";

const Dashboard = () => {
    const { renterExists, currentAccount } = useContext(BlockchainContext)
    let [loading, setLoading] = useState(true);
    console.log(renterExists)
    return (
        <Stack
            as={Box}
            textAlign={'center'}
            spacing={{ base: 8, md: 14 }}
            py={{ base: 20, md: 36}}>
        { renterExists == null && currentAccount ? <Center><ClipLoader loading={loading} size={75} /></Center> : renterExists ? <CurrentTotals /> : <RenterForm /> }
        <Flex justifyContent={'center'} alignItems={'center'}>
            <Vehicle vehicle={V1}/>
            <Vehicle vehicle={V2}/>
            <Vehicle vehicle={V3}/>
        </Flex>
        </Stack>
    )
}

export default Dashboard