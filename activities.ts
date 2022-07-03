export const activities = [
  {
    title: "GT Solar Racing",
    description: "Electrical Lead",
    details: [
      "Reversed engineered a dongle terminator and designed a PCB board using TivaTM that integrates the Rudman BUS <=> UART <=> CAN BUS critical path instead of using the dongle terminator and an Arduino as the CAN Transceiver. Reduced the connection number on the critical path from 4 to 2 to improve the stability and save the team $200 for dongle terminator replacement.",
      "Designed an embedded system consists of a pair of PCB board that controls the peripheralof the solar car and wrote thefirmware code for TivaTMC Series Microcontroller used on the board, featuring an acknowledgment system that enables several GPIO board on the car at the same time to improve the modularization of different parts of the solar car.",
      "Held weekly electrical meetings among all subteamleads to guaranteea smooth operation of the electrical team. The meeting usually includes status updateon both SR-3 and SR-4 and discussionof the general timeline of the current semester.",
      "Designed, structured,and tested the infotainment system for SR-4. Itconsists of an Angular app as the front-endusingtechnologies such as RxJS and SCSS and a Go server that gets live data from the car through influxDB database.The infotainment system can potentially bring an advantage of 3-4 points to the team during the race.",
    ],
  },
  {
    title: "CS 3210 Operating System Design",
    description: "Teachinng Assistant",
    details: [
      "Helped students with problems during classes/projects regarding topics such as multi-threading, scheduling, synchronization, communication, and access control. Projects will cover design and implementation of several operating systems components.",
      "For the labs of the course, we mainly modified the virtual memory system (zero-lazy allocation and copy on write forking), threading (building a one-to-one user-thread library), scheduling (A system with FIFO and RR with preemption) and the booting process of xv6(dynamically allocate space for the kernel after the bootloader instead of static space allocation).",
    ],
  },
  {
    title: "Arm Inc.",
    description: "Verification Engieer Intern",
    details: [
      "Learned the concept and the general structure of Universal Verification Methodology (UVM).",
      "Experienced the complete of designing testing sequences => writing stimulus => writing checkers => improving coverage.",
      "Debugged nightly regressions errors and categorize them (whether they are RTL issues or Test Bench issues). Came up with patches to fix those bugs. Helped the team to reach an important milestone (Limited Access Control, LAC).",
    ],
  },
];
