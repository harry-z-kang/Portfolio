export const projects = [
  {
    name: "Portfolio",
    img: "project1.jpg",
    description:
      "Portfolio for myself. You can fid all my contact details of me on this website including my resume. The main framework of this website is ReactJS with support from Font Awesome and Next.js for page routing and server-side rendering. It took me around 8 hours to completely finish it with a relatively high-quality code structure",
    github: "https://github.com/Zkang0729/Portfolio",
    website: "https://portfolio-harry-z-kang.vercel.app/",
  },
  {
    name: "GTSR Peripheral board",
    img: "project2.jpg",
    description:
      "This is the peripheral board that cotrols the headlight, blinkers, brake light, hazard and the horn of the car. It feaetures a Tiva TM4C123GH6PM MCU. The output voltage (12V) is controlled by 3 load switches (TPS2HB16-Q1A) which provides 6 channels. Those load switches have open circuit detectionn, voltage reporting, etc. functionalities. The information will be gathered and sent to our telemetry server for further analysis and debugginng purpose.",
    github: "https://github.gatech.edu/GTSR/board-peripheral",
    website:
      "./_next/image?url=%2F_next%2Fstatic%2Fmedia%2Fproject2.00c6578f.jpg&w=1920&q=75",
  },
  {
    name: "GTSR Tiva Library",
    img: "project3.jpg",
    description:
      "This library is developed based upon the Tivaware API. It involves several team members and takes around 3 years of time to become what it is right now. Since Tiva is the MCU that we use throughout the car, it makes sense to create aother layer of abstraction that fits our need and usage. My main contribution is the ADC library which can be found in gtsr_adc.h and gtsr_adc.c which provides ADC functionality. Future plan is to include extra features such as PWM, DMA and DCON.",
    github: "https://github.gatech.edu/GTSR/tivalibs",
    website: "https://github.gatech.edu/GTSR/tivalibs",
  },
  {
    name: "Senior Design",
    img: "project4.jpg",
    description:
      "The seior design projects maily focuses on the cyber security side on Azure IoT Hub and LTE Gateway security. We are building a BLE Mesh Network that collects data from sensors and send it to Azure IoT Hub via LTE for further analysis. The security side of the busiess features SHA 256 encryption and the has the salted with the IMEI of each BLE device. This means that it's nearly impossible for hackers to steal information from the network without physical access to the devices.",
    github: "https://github.gatech.edu/zkang35/Senior_Design",
    website: "https://eceseniordesign2021fall.ece.gatech.edu/sd21f41/",
  },
  {
    name: "GTSR Solar Cell Monitor",
    img: "project5.jpg",
    description:
      "In order to gain finner graulairty on the solar module data (module-based compared to zone-based), Isaac Weintraub and I are developing this board as part of the solar cell aanlysis system. This board features a DS18B20 One-Wire temperature sensor and 2 ADC ports for voltage and shadow monitoring. The collected data will be sent to a backend server writte in Go for cell ideality calculation which will trigger re-simulation accordingly.",
    github: "https://github.gatech.edu/GTSR/board-solar-cell-monitor",
    website:
      "./_next/image?url=%2F_next%2Fstatic%2Fmedia%2Fproject5.c9fb6d7c.jpg&w=1920&q=75",
  },
  {
    name: "Cortex-M85",
    img: "project6.jpg",
    description: "This is the first project I have worked on with ARM both as an intern and as a full-time employee. During my internship, I worked on the DCA feature testbench using SystemVerilog and UVM. As a full-time employee, I worked on the System Verification on Operating System (SVOS), focusing on flow improvement and performance bug hunting. I also worked with the formal team on evaluating Security Path Verification (SPV) which is an extension on the Cadance JasperGold Formal Tool.",
    github: "https://www.arm.com/products/silicon-ip-cpu/cortex-m/cortex-m85",
    website: "https://www.arm.com/products/silicon-ip-cpu/cortex-m/cortex-m85",
  },
];
