import React from "react"
import Header from "../components/Header"
import HPAssignmentCard from "../components/HPAssignmentCard";

const Home = () => {
    return (
        <div>
            <Header></Header>
            <HPAssignmentCard></HPAssignmentCard>
            <HPAssignmentCard></HPAssignmentCard>
            <HPAssignmentCard></HPAssignmentCard>
        </div>
    );
};

export default Home