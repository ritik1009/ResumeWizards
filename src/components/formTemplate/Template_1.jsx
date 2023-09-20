import {
  Page,
  Text,
  Image,
  Document,
  StyleSheet,
  PDFViewer,
  View,
  Link,
} from "@react-pdf/renderer";
import dp from "../img/dp.jpeg";
import { useSelector } from "react-redux";

//pdfjs.GlobalWorkerOptions.workerSrc = `//cdnjs.cloudflare.com/ajax/libs/pdf.js/${pdfjs.version}/pdf.worker.js`;

const styles = StyleSheet.create({
  container: {
    paddingTop: 60,
    paddingBottom: 20,
    paddingHorizontal: 20,
  },
  Heading: {
    fontSize: 24,
    fontWeight: "ultrabold",
    marginTop: 25,
  },
  subHeading: {
    fontSize: 18,
    fontWeight: "ultrabold",
    marginBottom: 4,
    marginTop: 18,
    color: "white",
  },
  rightSubHeading: {
    marginTop: 6,
    fontSize: 16,
    fontWeight: "extrabold",
  },
  title: {
    fontSize: 22,
    textAlign: "center",
    // fontFamily: "AntonFamily",
  },
  link: {
    textDecoration: "none",
  },
  text: {
    marginTop: 3,
    fontSize: 12,
    color: "white",
    // fontFamily: "AntonFamily",
  },
  rightText: {
    marginTop: 4,
    fontSize: 10,
    color: "black",
    // fontFamily: "AntonFamily",
  },

  date: {
    fontSize: 8,
    color: "#868e96",
  },
  ul: {
    display: "flex",
    flexDirection: "column",
  },
  li: {
    color: "white",
    marginBottom: 10,
    display: "block",
    fontSize: 12,
  },
  // image: {
  //   marginVertical: 15,
  //   marginHorizontal: 100,
  // },
  header: {
    fontSize: 12,
    marginBottom: 20,
    textAlign: "center",
    color: "grey",
    // fontFamily: "AntonFamily",
  },
  image: {
    height: "100px",
    width: "100px",
    borderRadius: "50%",
    justifyContent: "center",
    marginHorizontal: "auto",
    marginBottom: 10,
  },
  pageNumber: {
    position: "absolute",
    fontSize: 12,
    bottom: 30,
    left: 0,
    right: 0,
    textAlign: "center",
    color: "grey",
    // fontFamily: "AntonFamily",
  },
  viewer: {
    width: window.innerWidth / 1.5, //the pdf viewer will take up all of the width and height
    height: window.innerHeight,
    backgroundColor: "#dee2e6",
    overflow:"hidden",
  },
});

const Template_1 = ({data}) => {
  // console.log(data)
  // const data_ = useSelector((state) => state.user);
  // console.log(data_)
  const data_ = {
    personalInfo: {
      firstName: "Ritik",
      lastName: "Khandelwal",
      job_position: "FrontEnd Devloper",
      phone_number: "7276967036",
      email_address: "ritikkhndelwal@gmail.com",
      city: "Pune",
      country: "India",
      summary: `Enthusiastic Front End Developer with a strong foundation in HTML, CSS, and JavaScript. Experienced in creating responsive and visually appealing web pages using Webflow and other CMS software. Collaborative team player with a passion for optimizing web performance and staying updated with the latest web technologies.`,
    },
    links: {
      title: "Links",
      data: [
        {
          name: "Github",
          link: "https://github.com",
        },
        {
          name: "Linkedin",
          link: "https://Linkedin.com",
        },
        {
          name: "Linkedin++",
          link: "https://Linkedin.com",
        },
      ],
    },
    skills: {
      title: "Skills",
      data: [
        {
          name: "Python",
          rating: 5,
        },
      ],
    },
    work_History: {
      title: "Employment History",
      data: [
        {
          position: "Frontend Devloper",
          companyName: "Confluex",
          location: "Bangalore",
          start_date: "02/2022",
          end_date: "03/2023",
          description: "",
        },
      ],
    },
    Projects: {
      title: "Projects",
      data: [
        {
          name: "E-commerce Website",
          start_date: "0 4 / 2 0 2 3",
          end_date: "0 4 / 2 0 2 3",
          description:
            "Collaborated with a team to design and build an e-commerce website using Webflow,resulting in improved user engagement",
          links: [
            { name: "github", link: "http://github.com" },
            { name: "Live", link: "http://github.com" },
          ],
          techStack: "Python, JavaScript, Nodejs",
        },
        {
          name: "E-commerce Website",
          start_date: "0 4 / 2 0 2 3",
          end_date: "0 4 / 2 0 2 3",
          description:
            "Collaborated with a team to design and build an e-commerce website using Webflow,resulting in improved user engagement",
          links: [
            { name: "github", link: "http://github.com" },
            { name: "Live", link: "http://github.com" },
          ],
          techStack: "Python, JavaScript, Nodejs",
        },
      ],
    },
    education: {
      title: "Education",
      data: [
        {
          degree: "BE",
          subject: "Computer Science",
          collegeName: "D Y patil College of Engineering",
          city: "Pune",
          start_date: "0 7 / 2 0 1 8",
          end_date: "0 7 / 2 0 2 1 ",
          marks: "8.2 GPA",
        },
        {
          degree: "BE",
          subject: "Computer Science",
          collegeName: "D Y patil College of Engineering",
          city: "Pune",
          startdate: "0 7 / 2 0 1 8",
          enddate: "0 7 / 2 0 2 1 ",
          marks: "8.2 GPA",
        },
      ],
    },
    course: {
      title: "Course",
      data: [
        {
          name: "Web Devlopment BootCamp",
          fromWhere: "Udemy",
          links: [
            { name: "github", link: "http://github.com" },
            { name: "Live", link: "http://github.com" },
          ],
          start_date: "04/2023",
          end_date: "06/2023",
          description: "I have learned",
        },
      ],
    },
  };
  // lastName = data.lastName;
  return (
    // <PDFViewer style={styles.viewer} showToolbar={false}>
      <Document>
        <Page style={styles.body}>
          <View style={{ flexDirection: "row" }}>
            <View
              style={[
                styles.container,
                {
                  flex: 0.4,
                  height: "100vh",
                  width: 10,
                  backgroundColor: "green",
                },
              ]}
            >
              <Image src={dp} style={styles.image}></Image>
              <Text
                style={{
                  color: "white",
                  fontSize: 24,
                  textAlign: "center",
                  fontWeight: 600,
                }}
              >
                {data.personalInfo.firstName}
              </Text>
              <Text
                style={{
                  color: "white",
                  fontSize: 24,
                  textAlign: "center",
                  fontWeight: 600,
                }}
              >
                {data.personalInfo.lastName}
              </Text>
              <Text
                style={{
                  marginTop: 10,
                  height: "1px",
                  backgroundColor: "white",
                }}
              ></Text>
              {/* Position */}
              <Text
                style={{
                  color: "white",
                  marginTop: 10,
                  fontSize: 10,
                  textAlign: "center",
                  textTransform: "uppercase",
                  fontWeight: 600,
                }}
              >
                {data.personalInfo.job_position}
              </Text>
              <Text style={styles.subHeading}>Personal Profile</Text>
              <Text style={styles.text}>{data.personalInfo.phone_number}</Text>
              <Text style={styles.text}>{data.personalInfo.email_address}</Text>
              <Text style={styles.subHeading}>Links</Text>
              {/* {data.links.data.map((links, idx) => {
                return (
                  <Link
                    key={idx}
                    src={links.link}
                    style={[styles.text, styles.link]}
                  >
                    {links.name}
                  </Link>
                );
              })} */}
              {Object.keys(data.links.data).map((key,idx)=>{
                return (
                  data.links.data[key]?
                  <Link
                    key={idx}
                    src={data.links.data[key]}
                    style={[styles.text, styles.link]}
                  >
                    {key}
                  </Link>:null
                );
              })}

              {/* Skills Section */}
              <Text style={styles.subHeading}>Skills</Text>
              {data.skills.data.map((skill, idx) => {
                return (
                  <Text key={idx} style={styles.li}>
                    {skill.name}{" "}
                  </Text>
                );
              })}
            </View>
            <View style={[styles.container, { flex: 1 }]}>
              {/* Professional Summary */}
              <View>
                <Text style={styles.Heading}>Professional Summary</Text>
                <Text style={styles.rightText}>
                  {data.personalInfo.summary}
                </Text>
              </View>

              {/* Trying the dictionary approach */}
              {/* {Object.entries(data.right).map(([key, value]) => {
                <View>
                  <Text style={styles.Heading}>Employment History</Text>
                  <View style={styles.employment}>
                    <Text style={styles.rightSubHeading}>
                      Frontend Devloper, Confluex, Bangalore
                    </Text>
                    <Text style={styles.date}>
                      0 2 / 2 0 2 2 - 0 3 / 2 0 2 3
                    </Text>
                    <Text style={styles.rightText}>
                      - Worked closely with back-end developers to ensure
                      seamless functionality and performance.
                      <br /> - Conducted cross-browser and device compatibility
                      testing, debugging and optimizing code as needed.
                      <br /> - Assisted in integrating version control tools
                      such as Git for efficient team collaboration.
                      <br /> - Actively participated in team meetings,
                      contributing ideas and insights to enhance project
                      outcomes
                    </Text>
                  </View>
                </View>;
              })} */}

              {/* Employment History */}
              <View>
                <Text style={styles.Heading}>Employment History</Text>

                {data.work_History.data.map((da, idx) => {
                  return (
                    <View style={styles.employment} key={idx}>
                      <Text style={styles.rightSubHeading}>
                        {da.position}, {da.companyName}, {da.location}
                      </Text>
                      <Text style={styles.date}>
                        {da.start_date} - {da.end_date}
                      </Text>
                      <Text style={styles.rightText}>{da.description}</Text>
                    </View>
                  );
                })}
              </View>

              {/* Projects */}
              <View>
                <Text style={styles.Heading}>Project</Text>
                {data.Projects.data.map((da, idx) => {
                  return (
                    <View style={styles.project} key={idx}>
                      <Text style={styles.rightSubHeading}>{da.name}</Text>
                      <Text style={styles.date}>
                        {da.start_date} - {da.end_date}
                      </Text>
                      <Text style={styles.rightText}>{da.description}</Text>
                      {da.links.map((links, idx) => {
                        return (
                          <Link
                            key={idx}
                            src={links.link}
                            style={[styles.rightText, styles.link]}
                          >
                            {links.name}
                          </Link>
                        );
                      })}
                    </View>
                  );
                })}
              </View>
              {/* Eductaion */}
              <View>
                <Text style={styles.Heading}>Eductaion</Text>
                {data.education.data.map((da, idx) => {
                  return (
                    <View style={styles.education} key={idx}>
                      <Text style={styles.rightSubHeading}>
                        {da.degree} {da.subject}, {da.collegeName},{da.city}
                      </Text>
                      <Text style={styles.date}>
                        {da.start_date} - {da.end_date}
                      </Text>
                      <Text style={styles.rightText}>{da.marks}</Text>
                    </View>
                  );
                })}
              </View>
              {/* Courses */}
              <View>
                <Text style={styles.Heading}>Courses</Text>
                {data.course.data.map((da, idx) => {
                  return (
                    <View style={styles.courses} key={idx}>
                      <Text style={styles.rightSubHeading}>{da.name}</Text>
                      <Text style={styles.fromWhere}>{da.fromWhere}</Text>
                      <Text style={styles.date}>
                        {da.start_date} - {da.end_date}
                      </Text>
                      <Text style={styles.rightText}>{da.description}</Text>
                      {da.links.map((links, idx) => {
                        return (
                          <Link
                            key={idx}
                            src={links.link}
                            style={[styles.rightText, styles.link]}
                          >
                            {links.name}
                          </Link>
                        );
                      })}
                    </View>
                  );
                })}
              </View>
            </View>
          </View>
        </Page>
      </Document>
    // </PDFViewer>
  );
};

export default Template_1;
