import {
  Page,
  Text,
  Image,
  Document,
  StyleSheet,
  View,
  Link,
} from "@react-pdf/renderer";

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
    overflow: "hidden",
  },
});

const Template_3 = ({ data }) => {
  // const data_ = useSelector((state) => state.user);
  // console.log(data_)
  // lastName = data.lastName
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
                backgroundColor: "gray",
              },
            ]}
          >
            {data.personalInfo.profileImage ? (
              <Image
                src={data.personalInfo.profileImage}
                // src={{uri:dataUri}}
                // src ={dp}
                style={styles.image}
              ></Image>
            ) : (
              ""
            )}
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
            {Object.keys(data.links.data).map((key, idx) => {
              return data.links.data[key] ? (
                <Link
                  key={idx}
                  src={data.links.data[key]}
                  style={[styles.text, styles.link]}
                >
                  {key}
                </Link>
              ) : null;
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
              <Text style={styles.rightText}>{data.personalInfo.summary}</Text>
            </View>
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

export default Template_3;
