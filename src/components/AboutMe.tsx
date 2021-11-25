import { FC, useEffect } from "react";
import Header from "./common/Header";
import "./AboutMe.scss";

const AboutMe: FC = (): JSX.Element => {
  useEffect(() => {
    document.title = "About Me";
  });

  return (
    <div className="container">
      <Header
        largeHeading="About Me"
        smallHeading="Let me tell you a few things..."
      />
      <div className="about">
        <div className="about__bioImage"></div>
        <div className="about__bio">
          <h3 className="text-secondary">BIO</h3>
          <p>
            My name is Zixuan Kang, but most time people call me Harry. I'm a
            senior majoring in Computer Engineering concentrating in VLSI Design
            and Computer Architecture and minoring in Computer Science focusing
            on system & Architecture @ Georgia Institute of Techology.
          </p>
        </div>
        <div className="about__job">
          <h3>GT Solar Racing</h3>
          <h6>Auxiliary System Lead (Electrical Lead from January, 2022)</h6>
          <p>
            - Reversed engineered a dongle terminator anddesigned a PCB
            boardusing TivaTM that integrates the Rudman BUS &#60;=&#62; UART
            &#60;=&#62; CAN BUS critical path instead of using the dongle
            terminator and an Arduino as the CAN Transceiver. Reduced the
            connection number on the critical path from 4 to 2 to improve the
            stability and save the team $200 for dongle terminator replacement.
            <br />
            <br />- Designed an embedded system consists of a pair of PCB board
            that controls the peripheralof the solar car and wrote thefirmware
            code for TivaTMC Series Microcontroller used on the board, featuring
            an acknowledgment system that enables several GPIO board on the car
            at the same time to improve the modularization of different parts of
            the solar car.
          </p>
        </div>
        <div className="about__job">
          <h3>CS 3210 Operating System Design</h3>
          <h6>Teachinng Assistant</h6>
          <p>
            - Helped students with problems during classes/projects regarding
            topics such as multi-threading, scheduling, synchronization,
            communication, and access control. Projects will cover design and
            implementation of several operating systems components.
            <br />
            <br />- For the labs of the course, we mainly modified the virtual
            memory system (zero-lazy allocation and copy on write forking),
            threading (building a one-to-one user-thread library), scheduling (A
            system with FIFO and RR with preemption) and the booting process of
            xv6(dynamically allocate space for the kernel after the bootloader
            instead of static space allocation).
          </p>
        </div>
        <div className="about__job">
          <h3>Arm Inc.</h3>
          <h6>Verification Engieer Intern</h6>
          <p>
            - Learned the concept and the general structure of Universal
            Verification Methodology (UVM).
            <br />
            <br />- Experienced the complete of designing testing sequences
            =&#62; writing stimulus =&#62; writing checkers =&#62; improving
            coverage.
            <br />
            <br />- Debugged nightly regressions errors and categorize them
            (whether they are RTL issues or Test Bench issues). Came up with
            patches to fix those bugs. Helped the team to reach an important
            milestone (Limited Access Control, LAC).
          </p>
        </div>
      </div>
    </div>
  );
};

export default AboutMe;
