import React from 'react'
import Button from '../../../components/Button'
import { Heart, User } from 'lucide-react'

function Home() {
    return (
        <div style={{ display: "flex", gap: 20, flexDirection: 'column' }}>
            <Button variant="a" bgColor="#0099ff" titleColor="white"  />
            <Button variant="b"  bgColor="#4262ff"  titleColor="white" />
            <Button variant="c" rightIcon={<User color="#ffffff" />} title="Signup" titleColor="white"  bgColor="#309cff"/>
            <Button variant="d" rightIcon={<User color="#309cff" />} title="Signup" />
            <Button variant="e" rightIcon={<Heart color="#309cff" />} leftIcon title="Likes" />
        </div>
    )
}

export default Home