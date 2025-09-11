import ProjectCard from "./components/ProjectCard";
import { useEffect, useState, useRef } from "react";
import projectsdata from "../src/assets/projects.json";
import { Navbar } from "./components/Navbar";
import CodingProfileCards from "./components/CodingProfileCards";
function App() {
  const [showProjects, setShowProjects] = useState(false);
  const [showSideProjects, setShowSideProjects] = useState(false);
  const [projects] = useState(projectsdata);
  const [leetCodedata, setLeetCodedata] = useState<any>(null);
  const [codeforcesdata, setCodeforcesdata] = useState<any>(null);

  useEffect(() => {
    const fetchLeetCodeUserData = async () => {
      const username = "Tushar_Sharma811"; // Replace with the desired LeetCode username
      const query = `
    query getUserProfile($username: String!) {
      matchedUser(username: $username) {
        username
        profile {
          realName
          userAvatar
          ranking
          reputation
        }
      }
      userContestRanking(username: $username) {
        rating
        ranking
        attendedContestsCount
        totalParticipants
        topPercentage
      }
    }
  `;

      const variables = { username };

      const response = await fetch("https://leetcode.com/graphql", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          query,
          variables,
        }),
      });

      const data = await response.json();
      setLeetCodedata(data.data);
    };
    const fetchCodeforcesData = async () => {
      const response2 = await fetch(
        `https://codeforces.com/api/user.info?handles=itachi_01`
      );
      const data2 = await response2.json();
      console.log("Codeforces Data:", data2);

      setCodeforcesdata(data2);
    };

    fetchLeetCodeUserData();
    fetchCodeforcesData();
  }, []);

  const [hovered, setHovered] = useState<string | null>(null);
  const hoverTimeout = useRef<NodeJS.Timeout | null>(null);

  const handleMouseEnter = (platform: string) => {
    if (hoverTimeout.current) clearTimeout(hoverTimeout.current);
    setHovered(platform);
  };

  const handleMouseLeave = () => {
    hoverTimeout.current = setTimeout(() => {
      setHovered(null);
    }, 1500); // 1.5s delay
  };
  return (
    <>
      <main className="  bg-bg text-text-color font-secondary">
        <Navbar />
        <div className="flex min-h-screen flex-col gap-5 md:w-1/2 content-center mx-auto">
          <div className="flex flex-col gap-4">
            <h1 className="text-5xl font-primary font-bold underline md:mt-3">
              hi, i am <span className=" text-accent">Tushar Sharma</span>
            </h1>
            <p>
              I am a final year student, pursuing B.Tech in Information
              Technology.
            </p>
            <p>
              I love building things for the web and learning new technologies.
            </p>
          </div>
          <div className="flex flex-col gap-3">
            <div className="flex gap-3">
              <a className="link-underline" href="">
                github
              </a>
              <a className="link-underline" href="">
                linkedin
              </a>
              <a className="link-underline" href="">
                twitter
              </a>
              <a className="link-underline" href="">
                gmail
              </a>
            </div>
            <div className="flex gap-3">
              <button className="btn">
                <a href="">resume</a>
              </button>
              <button className="btn">
                <a href="">blog</a>
              </button>
            </div>
          </div>
          <div className="flex flex-col gap-3">
            <h1 className="text-3xl font-primary font-thin ">My Projects:</h1>
            <ul className="list-disc list-inside pl-3">
              <li
                onClick={() => setShowProjects(!showProjects)}
                className="cursor-pointer hover:underline "
              >
                main projects
              </li>
              {showProjects && (
                <div className="grid grid-cols-1 md:grid-cols-2 gap-3 mb-3">
                  {projects.map((project, id) => {
                    if (project.type === "main") {
                      return (
                        <ProjectCard
                          key={id}
                          title={project.title}
                          description={project.description}
                          imgSRC={project.img}
                          githubURL={project.githubLink}
                          liveURL={project.liveLink}
                        />
                      );
                    }
                  })}
                </div>
              )}
              <li
                className="cursor-pointer hover:underline "
                onClick={() => setShowSideProjects(!showSideProjects)}
              >
                side projects
              </li>
              {showSideProjects && (
                <div className="grid grid-cols-1 md:grid-cols-2 gap-3 mb-3">
                  {projects.map((project, id) => {
                    if (project.type === "side") {
                      return (
                        <ProjectCard
                          key={id}
                          title={project.title}
                          description={project.description}
                          imgSRC={project.img}
                          githubURL={project.githubLink}
                          liveURL={project.liveLink}
                        />
                      );
                    }
                  })}
                </div>
              )}
              <li>open source contributions</li>
            </ul>
          </div>
          <div className="flex flex-col gap-3">
            <h1 className="text-3xl font-primary font-thin  ">Skills :</h1>
            <ul className="list-disc list-inside mb-1.5 pl-3">
              <li>
                <span className="font-bold">Frontend:</span> HTML, CSS,
                JavaScript, TypeScript, React, TailwindCSS, Zustand
              </li>
              <li>
                <span className="font-bold">Backend:</span> Node.js, Express.js,
                MongoDB, PostgreSQL, Golang, Redis
              </li>
              <li>
                <span className="font-bold">DevOps:</span> Github actions,
                Docker, AWS
              </li>
              <li>
                <span className="font-bold">Tools:</span> Git, GitHub, Postman
              </li>
              <li>
                <span className="font-bold">CS Fundamentals:</span> Operating
                System, Networking, Databases, OOPS
              </li>
            </ul>
          </div>

          <div className="flex flex-col gap-3">
            <h1 className="text-3xl font-primary font-thin ">
              Certifications :
            </h1>
            <ul className="list-disc list-inside mb-1.5 pl-3">
              <li>
                Google Cloud Computing Foundations Certificate{" "}
                <span>{"->"}</span>{" "}
                <a
                  className="cursor-pointer hover:underline"
                  href="https://www.credly.com/badges/5332c864-ed4d-4219-aafd-1e11078547fc/public_url"
                >
                  Link
                </a>
              </li>
              <li>
                CCNA: Introduction to Networks <span>{"->"}</span>{" "}
                <a
                  className="cursor-pointer hover:underline"
                  href="https://www.credly.com/badges/5332c864-ed4d-4219-aafd-1e11078547fc/public_url"
                >
                  Link
                </a>
              </li>
            </ul>
          </div>
          <div>
            <h1 className="text-3xl font-primary font-thin mb-1.5">
              Coding Profiles:
            </h1>
            <ul className="list-disc list-inside mb-1.5 pl-3 flex flex-col gap-2">
              <li className="relative">
                <a
                  href="https://leetcode.com/u/Tushar_Sharma811/"
                  onMouseEnter={() => handleMouseEnter("leetcode")}
                  onMouseLeave={handleMouseLeave}
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    enable-background="new 0 0"
                    viewBox="0 0"
                    id="leetcode"
                    className="inline h-6 w-5"
                  >
                    <path
                      fill="#B3B1B0"
                      d="M22,14.355c0-0.742-0.564-1.345-1.26-1.345H10.676c-0.696,0-1.26,0.604-1.26,1.345c0,0.742,0.564,1.346,1.26,1.346H20.74C21.436,15.701,22,15.098,22,14.355L22,14.355z"
                    ></path>
                    <path
                      fill="#9C9A99"
                      d="M22,14.355H9.416l0,0c0,0.742,0.564,1.346,1.26,1.346H20.74C21.436,15.701,22,15.098,22,14.355L22,14.355L22,14.355z"
                    ></path>
                    <path
                      fill="#C98F1B"
                      d="M4.781,14.355H4.735c0.015,0.736,0.315,1.474,0.897,2.068c1.309,1.336,2.639,2.65,3.96,3.974l0.204,0.198c0.469,0.303,0.473,1.25,0.182,1.671c-0.31,0.449-0.71,0.729-1.271,0.729c-0.02,0-0.041,0-0.062-0.001c-0.2-0.007-0.364-0.087-0.53-0.181c-0.035-0.02-0.07-0.04-0.104-0.062C8.963,23.593,10.221,24,11.599,24c1.484,0,2.83-0.511,3.804-1.494l2.589-2.637c0.51-0.514,0.492-1.365-0.039-1.9c-0.272-0.275-0.627-0.413-0.978-0.413c-0.332,0-0.659,0.124-0.906,0.374l-2.676,2.607c-0.462,0.467-1.102,0.662-1.808,0.662c-0.706,0-1.346-0.195-1.81-0.662l-4.297-4.363C5.024,15.716,4.79,15.052,4.781,14.355L4.781,14.355z"
                    ></path>
                    <path
                      fill="#060605"
                      d="M4.735,14.355H1.918c0.006,1.485,0.595,2.945,1.739,4.101c1.324,1.336,2.657,2.663,3.984,3.996c0.113,0.114,0.236,0.215,0.37,0.3c0.034,0.021,0.068,0.042,0.104,0.062c0.166,0.094,0.33,0.174,0.53,0.181c0.021,0.001,0.041,0.001,0.062,0.001c0.561,0,0.961-0.28,1.271-0.729c0.291-0.421,0.286-1.368-0.182-1.671l-0.204-0.198c-1.321-1.324-2.652-2.638-3.96-3.974C5.05,15.83,4.75,15.091,4.735,14.355L4.735,14.355z"
                    ></path>
                    <path
                      fill="#E7A41F"
                      d="M3.483,18.187l4.312,4.361C8.767,23.527,10.113,24,11.599,24c1.484,0,2.83-0.511,3.804-1.494l2.589-2.637c0.51-0.514,0.492-1.365-0.039-1.9c-0.53-0.535-1.375-0.553-1.884-0.039l-2.676,2.607c-0.462,0.467-1.102,0.662-1.808,0.662c-0.706,0-1.346-0.195-1.81-0.662l-4.297-4.363c-0.463-0.468-0.697-1.15-0.697-1.863c0-0.713,0.234-1.357,0.697-1.824l4.285-4.38c0.464-0.468,1.116-0.645,1.822-0.645c0.707,0,1.347,0.195,1.808,0.662l2.676,2.606c0.51,0.515,1.354,0.497,1.885-0.038c0.531-0.536,0.549-1.386,0.039-1.901l-2.589-2.635c-0.648-0.646-1.471-1.116-2.392-1.33l-0.033-0.006l2.447-2.504c0.512-0.514,0.494-1.366-0.037-1.901c-0.53-0.535-1.376-0.553-1.887-0.038L3.483,10.476C2.509,11.458,2,12.814,2,14.312S2.509,17.206,3.483,18.187L3.483,18.187z"
                    ></path>
                    <path
                      fill="#070706"
                      d="M8.115,22.814c-0.176-0.097-0.332-0.219-0.474-0.361c-1.327-1.333-2.66-2.66-3.984-3.996c-1.988-2.009-2.302-4.936-0.785-7.32c0.234-0.37,0.529-0.694,0.839-1.004c3.208-3.214,6.415-6.43,9.623-9.644c0.625-0.626,1.497-0.652,2.079-0.066c0.559,0.562,0.527,1.455-0.077,2.065c-0.77,0.776-1.54,1.55-2.31,2.325c-0.041,0.122-0.14,0.2-0.226,0.287c-0.863,0.877-1.751,1.73-2.6,2.619c-0.111,0.115-0.262,0.186-0.372,0.305c-1.423,1.423-2.862,2.83-4.265,4.272c-1.136,1.167-1.096,2.938,0.068,4.128c1.309,1.336,2.639,2.65,3.96,3.974l0.204,0.198c0.469,0.303,0.473,1.25,0.182,1.671c-0.321,0.466-0.739,0.75-1.333,0.728C8.445,22.987,8.281,22.907,8.115,22.814L8.115,22.814z"
                    ></path>
                    <path
                      fill="#EAB03C"
                      d="M13.021,4.826c-0.044,0.115-0.138,0.19-0.221,0.273c-0.863,0.877-1.751,1.73-2.6,2.619c-0.111,0.115-0.262,0.186-0.372,0.305c-1.423,1.423-2.862,2.83-4.265,4.272c-0.58,0.596-0.853,1.349-0.827,2.102h0.046C4.781,14.368,4.78,14.339,4.78,14.31c0-0.713,0.234-1.357,0.697-1.824l4.285-4.38c0.464-0.468,1.116-0.645,1.822-0.645c0.707,0,1.347,0.195,1.808,0.662l2.676,2.606c0.248,0.251,0.576,0.375,0.908,0.375c0.35,0,0.705-0.138,0.977-0.413c0.531-0.536,0.549-1.386,0.039-1.901l-2.589-2.635C14.757,5.51,13.938,5.041,13.021,4.826L13.021,4.826z M14.4,0c-0.194,0.001-0.386,0.045-0.562,0.132C14.021,0.049,14.212,0.005,14.4,0L14.4,0z"
                    ></path>
                    <path
                      fill="#272726"
                      d="M14.432,0c-0.01,0-0.021,0-0.031,0c-0.189,0.004-0.379,0.049-0.562,0.132c-0.178,0.081-0.349,0.2-0.504,0.356c-3.208,3.214-6.416,6.43-9.623,9.644c-0.31,0.31-0.604,0.634-0.839,1.004c-0.652,1.025-0.966,2.151-0.954,3.262h2.818c-0.026-0.753,0.248-1.506,0.827-2.102c1.402-1.442,2.842-2.849,4.265-4.272c0.111-0.119,0.261-0.189,0.372-0.305c0.849-0.889,1.737-1.742,2.6-2.619c0.083-0.084,0.177-0.159,0.221-0.273c0.002-0.005,0.003-0.009,0.005-0.014c0.77-0.775,1.54-1.549,2.31-2.325c0.604-0.61,0.637-1.503,0.077-2.065C15.133,0.14,14.786,0,14.432,0L14.432,0z"
                    ></path>
                  </svg>{" "}
                  Leetcode
                </a>
                {hovered && leetCodedata && (
                  <CodingProfileCards
                    data={leetCodedata}
                    platform="leetcode"
                    hovered={hovered === "leetcode"}
                  />
                )}
              </li>
              <li className="relative">
                <a
                  href="https://codeforces.com/profile/Itachi_01"
                  onMouseEnter={() => handleMouseEnter("codeforces")}
                  onMouseLeave={handleMouseLeave}
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 24 24"
                    id="code-forces"
                    className="inline h-6 w-5"
                  >
                    <path
                      fill="#F44336"
                      d="M24 19.5V12a1.5 1.5 0 0 0-1.5-1.5h-3A1.5 1.5 0 0 0 18 12v7.5a1.5 1.5 0 0 0 1.5 1.5h3a1.5 1.5 0 0 0 1.5-1.5z"
                    ></path>
                    <path
                      fill="#2196F3"
                      d="M13.5 21a1.5 1.5 0 0 0 1.5-1.5v-15A1.5 1.5 0 0 0 13.5 3h-3C9.673 3 9 3.672 9 4.5v15c0 .828.673 1.5 1.5 1.5h3z"
                    ></path>
                    <path
                      fill="#FFC107"
                      d="M0 19.5c0 .828.673 1.5 1.5 1.5h3A1.5 1.5 0 0 0 6 19.5V9a1.5 1.5 0 0 0-1.5-1.5h-3C.673 7.5 0 8.172 0 9v10.5z"
                    ></path>
                  </svg>{" "}
                  Codeforces
                </a>
                {hovered && codeforcesdata && (
                  <CodingProfileCards
                    data={codeforcesdata}
                    platform="codeforces"
                    hovered={hovered === "codeforces"}
                  />
                )}
              </li>
              <li>
                <a href="https://www.codechef.com/users/itachi_3000">
                  <img
                    alt="svgImg"
                    className="inline h-6 w-5"
                    src="data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciICB2aWV3Qm94PSIwIDAgNDggNDgiIHdpZHRoPSI1MHB4IiBoZWlnaHQ9IjUwcHgiPjxwYXRoIGQ9Ik0gMjIuODY3MTg4IDEuMDYyNSBDIDIyLjExMDU3OCAxLjA3NTA3ODEgMjEuMzQ3MDc4IDEuMTMwMjM0NCAyMC41ODAwNzggMS4yNDAyMzQ0IEMgMjAuNTQ0MDc4IDEuMjQ2MjM0NCAyMC41MDg2NTYgMS4yNTM3MTg4IDIwLjQ3MjY1NiAxLjI2MTcxODggQyAxOS4yOTg2NTYgMS41MTg3MTg3IDE4LjE2NDczNCAxLjkzMDIxODcgMTcuMTc3NzM0IDIuNDQ5MjE4OCBDIDE1Ljk5ODczNCAyLjk4NDIxODggMTQuNzgxMzI4IDMuNTM5MjgxMyAxMy43MzYzMjggMy42MTMyODEyIEMgMTMuNjQ1MzI4IDMuNjE5MjgxMiAxMy41NTQ3OTcgMy42MzMyNSAxMy40NjY3OTcgMy42NTYyNSBDIDExLjczNTc5NyA0LjEwMjI1IDEwLjI0MDE1NiA1LjE3NDc2NTYgOS4yODUxNTYyIDYuNjM0NzY1NiBMIDkuMTQyNTc4MSA2LjgzOTg0MzggQyA5LjA5NTU3ODEgNi45MDY4NDM4IDkuMDUyNTc4MSA2Ljk3ODczNDQgOS4wMTc1NzgxIDcuMDUyNzM0NCBDIDguMTgxNTc4MSA4LjgwMTczNDQgNy45NTk2MjUgMTAuODA0MzU5IDguMzkwNjI1IDEyLjY5MzM1OSBDIDguMzk4NjI1IDEyLjcyODM1OSA4LjQwNjk2ODggMTIuNzY0ODI4IDguNDE3OTY4OCAxMi43OTg4MjggQyA4LjY5MTk2ODggMTMuNjk0ODI4IDkuMDE1MTI1IDE0LjU0OSA5LjMyODEyNSAxNS4zNzUgTCA5LjQ0MTQwNjIgMTUuNjY3OTY5IEMgMTAuMTU2NDA2IDE3LjM0Njk2OSAxMC42NzQzNzUgMTkuMTA3MzQ0IDEwLjk4NDM3NSAyMC45MDIzNDQgQyAxMS4wMDkzNzUgMjEuMDQ4MzQ0IDExLjA1NjA0NyAyMS4xODkyNjYgMTEuMTIzMDQ3IDIxLjMyMjI2NiBDIDExLjM2OTA0NyAyMS44MTEyNjYgMTEuNTYyNjU2IDIyLjMzMjc2NiAxMS43MjI2NTYgMjIuODg0NzY2IEMgMTIuOTI4NjU2IDIyLjAxNzc2NiAxNC4zMjk3MDMgMjEuMzY3MjAzIDE1Ljg0NTcwMyAyMC45MDgyMDMgQyAxNS4xNDU3MDMgMTguOTE0MjAzIDE0LjY2OTc2NiAxNi43MDYzMTMgMTQuMjU5NzY2IDE0LjY5NTMxMiBDIDEzLjY4NDc2NiAxMS44NzczMTMgMTMuMTkyMTQxIDkuNDc1NzUgMTIuMjQ0MTQxIDguNzE4NzUgQyAxMi4xMzExNDEgOC41NjU3NSAxMi4wNTUzOTEgOC4zODcyMTg4IDEyLjAyNTM5MSA4LjE5OTIxODggQyAxMS45OTIzOTEgNy44NDAyMTg4IDEyLjA2NjI4MSA3LjQ4MTA2MjUgMTIuMjM4MjgxIDcuMTY0MDYyNSBDIDEyLjQwMTI4MSA2LjgxMTA2MjUgMTIuNjUzNzUgNi41MDUzNDM3IDEyLjk2ODc1IDYuMjc3MzQzOCBDIDEzLjE2ODc1IDYuMTQwMzQzOCAxMy4zOTY3MTkgNi4wNTI1MzEzIDEzLjYzNjcxOSA2LjAxOTUzMTIgTCAxMy42MzY3MTkgNi4wNjY0MDYyIEMgMTMuMzk4NzE5IDYuMDk5NDA2MyAxMy4xNjk2NTYgNi4xODcyMTg3IDEyLjk3MjY1NiA2LjMyNDIxODggQyAxMi43NjM2NTYgNi41ODYyMTg4IDEyLjU3NjA2MyA2Ljg2NTIwMzEgMTIuNDE0MDYyIDcuMTU4MjAzMSBDIDExLjk0ODA2MyA4LjA5MDIwMzEgMTIuOTMyNzgxIDguMDQ1NzM0NCAxMy4zMDA3ODEgOC41NTI3MzQ0IEMgMTQuMjU4NzgxIDkuMzI0NzM0NCAxNC4zMzYwMTYgMTEuODU3NTQ3IDE0LjkxNjAxNiAxNC42ODU1NDcgQyAxNS4zMjMwMTYgMTYuNjc2NTQ3IDE1LjU5MDUxNiAxOC44NjE4OTEgMTYuMTAzNTE2IDIwLjgzNzg5MSBDIDE2LjgzMDUxNiAyMC42Mjg4OTEgMTcuNTc4NzUgMjAuNDU2MTcyIDE4LjM0Mzc1IDIwLjMyNjE3MiBDIDE3LjQ3MTc1IDE4LjA0NTE3MiAxNy4yMzI0MzcgMTUuNDY2NTk0IDE3LjAyMzQzOCAxMy4wNTg1OTQgQyAxNi43NzQ0MzggMTAuMjkyNTk0IDE2LjU1MjM0NCA3Ljc1NDMxMjUgMTUuNDAyMzQ0IDYuMTk1MzEyNSBDIDE1LjIwNjM0NCA1Ljk3NzMxMjUgMTUuMTA4OTA2IDUuNjg4NDg0NCAxNS4xMjg5MDYgNS4zOTY0ODQ0IEMgMTUuMTUxOTA2IDUuMjYwNDg0NCAxNS4yMjc4NDQgNS4xNDA1NDY5IDE1LjMzOTg0NCA1LjA2MDU0NjkgQyAxNS40NjY4NDQgNC45NzE1NDY5IDE1LjYxNDUzMSA0LjkxNjI5NjkgMTUuNzY5NTMxIDQuOTA0Mjk2OSBDIDE2LjI2NDUzMSA0Ljg2NTI5NjkgMTYuNzU3MTA5IDUuMDAwMTA5NCAxNy4xNjIxMDkgNS4yODcxMDk0IEwgMTcuMTQyNTc4IDUuMzEwNTQ2OSBDIDE3LjE0ODU3OCA1LjMxNTU0NjkgMTcuMTU2MTA5IDUuMzE5MjE4OCAxNy4xNjIxMDkgNS4zMjQyMTg4IEwgMTcuMTMyODEyIDUuMzI0MjE4OCBMIDE3LjE0MjU3OCA1LjMxMDU0NjkgQyAxNi44NTc1NzggNS4wODE1NDY5IDE2LjQ4Mjk1MyA0Ljk5NjkzNzUgMTYuMTI2OTUzIDUuMDg1OTM3NSBDIDE1Ljk4Mzk1MyA1LjEwMTkzNzUgMTUuODQ3NTE2IDUuMTUwNDY4OCAxNS43Mjg1MTYgNS4yMzA0Njg4IEMgMTUuNjIyNTE2IDUuMzAwNDY4OCAxNS41NTEyNSA1LjQxMjEwOTQgMTUuNTMxMjUgNS41MzcxMDk0IEMgMTUuNTMxMjUgNS43MjMxMDk0IDE1LjM4NjI1IDUuNzU0NTYyNSAxNS41MzEyNSA2LjEwMTU2MjUgQyAxNi42OTEyNSA3LjY1NTU2MjUgMTcuNjAyMzEzIDEwLjI4MTczNCAxNy44MjAzMTIgMTMuMDUyNzM0IEMgMTguMDMyMzEyIDE1LjQ0ODczNCAxNy45MjA1OTQgMTguMDE2MTU2IDE4LjU1ODU5NCAyMC4yODUxNTYgQyAxOS40NTU1OTQgMjAuMTQyMTU2IDIwLjM2OTEwOSAyMC4wNTg2NzIgMjEuMjg3MTA5IDIwLjAxMzY3MiBDIDIwLjMxNTEwOSAxNi42NzU2NzIgMTkuNjg1MTI1IDEzLjI0NDUzMSAxOS40NTMxMjUgOS43Njk1MzEyIEMgMTkuMzM3MTI1IDguMjg1NTMxMyAxOS40NTY2NDEgNi43OTI3MDMxIDE5LjgwNjY0MSA1LjM0NTcwMzEgQyAyMC4xNDM2NDEgNC4xOTU3MDMxIDIwLjczMzM5MSAzLjQzOTY4NzUgMjEuNjUwMzkxIDMuMzA0Njg3NSBDIDIxLjk4NTM5MSAzLjI2MTY4NzUgMjIuMzI1MzkxIDMuMjg2OTA2MiAyMi42NTAzOTEgMy4zNzg5MDYyIEwgMjIuNjUwMzkxIDMuNDI1NzgxMiBDIDIyLjMyMDM5MSAzLjM2NDc4MTMgMjEuOTgwMjk3IDMuMzc0MDc4MSAyMS42NTQyOTcgMy40NTUwNzgxIEMgMjAuODg3Mjk3IDMuNjMxMDc4MSAyMC45ODE1MTYgNC4xMDk0MDYzIDIwLjQ3ODUxNiA1LjE5MTQwNjIgQyAyMC4wODY1MTYgNi41ODM0MDYzIDE5Ljk1OTQ2OSA4LjAzNTYwOTQgMjAuMTA1NDY5IDkuNDc0NjA5NCBDIDIwLjU5NjQ2OSAxMi42ODI2MDkgMjEuMTcxNjU2IDE2Ljc1NTE4NyAyMS43MjI2NTYgMTkuOTkyMTg4IEMgMjIuNjg3NjU2IDE5Ljk1OTE4NyAyMy42NTE2NTYgMTkuOTcyMjUgMjQuNTk3NjU2IDIwLjAzMTI1IEMgMjMuODczNjU2IDE0LjU4MTI1IDIzLjMzNjg5MSA4LjMyNDkzNzUgMjYuNDYyODkxIDMuNzEwOTM3NSBMIDI2LjUwMzkwNiAzLjcxMDkzNzUgQyAyNS4wOTk5MDYgNy40NTU5Mzc1IDI0LjkwODE4OCAxNC41ODg2NzIgMjQuNzQyMTg4IDE2Ljg4ODY3MiBDIDI0LjY5MTE4OCAxNy41ODY2NzIgMjQuNzMzMDYyIDE4LjgzMDgyOCAyNC43ODkwNjIgMjAuMDQ4ODI4IEMgMjYuMTM3MDYyIDIwLjE0MDgyOCAyNy40NDIyMDMgMjAuMzE0NjQxIDI4LjY1ODIwMyAyMC41NTY2NDEgQyAyOC42NjMyMDMgMTguMzIzNjQxIDI4LjgxOTM0NCAxNi4wOTI4MTMgMjkuMTUyMzQ0IDEzLjg4MjgxMiBDIDI5LjY2MjM0NCAxMC41MTU4MTIgMzAuODIzMzEzIDcuMjgwNDIxOSAzMi41NzAzMTIgNC4zNTc0MjE5IEwgMzIuNTcwMzEyIDQuNDA0Mjk2OSBDIDMyLjA2MjMxMiA4LjI1ODI5NjkgMzAuMTI2MjUgMTAuMDYwMDQ3IDI5LjQwNjI1IDEzLjg3MzA0NyBDIDI5LjIwMjI1IDE1Ljk5OTA0NyAyOC45OTA4NDQgMTguMzQ0Nzk3IDI4LjgzOTg0NCAyMC41OTE3OTcgQyAyOS43MTc4NDQgMjAuNzcyNzk3IDMwLjU0NjczNCAyMC45ODU1NjMgMzEuMzAyNzM0IDIxLjIyNjU2MiBDIDMxLjY5MDczNCAyMS4zNDk1NjMgMzIuMDkwMjM0IDIxLjQ5MjM5MSAzMi40OTAyMzQgMjEuNjUwMzkxIEMgMzIuOTg0MjM0IDE1LjczMzM5MSAzNS45NjY5NjkgOS4yODk2NDA2IDM3LjY2Nzk2OSA4LjkzMTY0MDYgQyAzNi4yNTY5NjkgMTMuMjc4NjQxIDM0LjYxMjc4MSAxNy41MzgwNzggMzIuOTI1NzgxIDIxLjgzMDA3OCBDIDMzLjU5Mzc4MSAyMi4xMjAwNzggMzQuMjM2MjAzIDIyLjQ2MjI4MSAzNC43ODMyMDMgMjIuODYzMjgxIEMgMzUuNTE3MjAzIDIxLjY1MTI4MSAzNi40OTYwMzEgMjAuNDUzMTU2IDM3LjQ1NzAzMSAxOS4yODUxNTYgQyAzOS41NDEwMzEgMTYuNzUyMTU2IDQxLjY5NTk1MyAxNC4xMzQ5MzcgNDEuNTAxOTUzIDExLjA4NTkzOCBDIDQxLjQ4ODk1MyAxMC44ODE5MzcgNDEuNDM0Nzk3IDEwLjY4MiA0MS4zNDE3OTcgMTAuNSBDIDQxLjAzMzc5NyA5Ljg5NyA0MC42OTYzOTEgOS4zMTExNTYyIDQwLjI3NTM5MSA4LjY2MDE1NjIgTCA0MC4xOTMzNTkgOC41MzUxNTYyIEMgNDAuMDk0MzU5IDguMzgwMTU2MyAzOS45OTU2NzIgOC4yMjQyNjU2IDM5Ljg4ODY3MiA4LjA3MjI2NTYgQyAzOS44MTM2NzIgNy45NjUyNjU2IDM5LjczNzE1NiA3Ljg2MzcxODggMzkuNjYwMTU2IDcuNzYxNzE4OCBMIDM5LjU3ODEyNSA3LjY1MDM5MDYgQyAzOS40MjIxMjUgNy40NDEzOTA2IDM5LjI2NTUxNiA3LjIzNTEwOTQgMzkuMTAzNTE2IDcuMDM3MTA5NCBMIDM4LjgyMjI2NiA2LjcwNzAzMTIgQyAzOC42NDUyNjYgNi41MDIwMzEyIDM4LjQ2NzI5NyA2LjMwNTM3NSAzOC4yNzkyOTcgNi4xMDkzNzUgTCAzOC4wNDI5NjkgNS44NzEwOTM4IEMgMzcuODMzOTY5IDUuNjY0MDkzOCAzNy42MjMwOTQgNS40NjYwOTM3IDM3LjM3MTA5NCA1LjI0NjA5MzggTCAzNy4yNjU2MjUgNS4xNTQyOTY5IEMgMzQuNjQwNjI1IDIuOTEzMjk2OSAzMS45NjM4OTEgMi4zMjg2NTYyIDMwLjMzNzg5MSAxLjk3MjY1NjIgTCAyOS40Mzk0NTMgMS43NzE0ODQ0IEMgMjcuMzQ5MjAzIDEuMzcxNzM0NCAyNS4xMzcwMTYgMS4wMjQ3NjU2IDIyLjg2NzE4OCAxLjA2MjUgeiBNIDIyLjQ3MjY1NiAyMi4wMDk3NjYgQyAxOC42NDI2OTkgMjIuMDYwMTQ5IDE0Ljc5MjQ1MyAyMi44OTg1MzEgMTIuMzYxMzI4IDI0LjkyNTc4MSBMIDEzLjU1NjY0MSAyOC4zNDU3MDMgQyAxMy42OTg2NDEgMjguNzQ5NzAzIDE0LjAwNDM5MSAyOS4wNzUyODEgMTQuNDAwMzkxIDI5LjIzODI4MSBDIDE0Ljc5NjM5MSAyOS40MDAyODEgMTUuMjQzOTA2IDI5LjM4NjE3MiAxNS42Mjg5MDYgMjkuMjAxMTcyIEMgMTguMDM0OTA2IDI4LjAzMTE3MiAyMy42NjkyNjYgMjUuMjk1MjAzIDMxLjQ0NzI2NiAzMC4xNTgyMDMgQyAzMS42ODgyNjYgMzAuMzA5MjAzIDMxLjk2NTE4NyAzMC4zODg2NzIgMzIuMjQyMTg4IDMwLjM4ODY3MiBDIDMyLjQ0NDE4NyAzMC4zODg2NzIgMzIuNjQ4ODQ0IDMwLjM0NjY3MiAzMi44Mzk4NDQgMzAuMjYzNjcyIEMgMzMuMjkyODQ0IDMwLjA2NDY3MiAzMy42MTk4NDQgMjkuNjU3ODI4IDMzLjcxNDg0NCAyOS4xNzM4MjggQyAzMy45MDk4NDQgMjguMTc3ODI4IDMzLjk4NDc4MSAyNi42MDA4MTMgMzMuOTI1NzgxIDI1LjI1NzgxMiBMIDMzLjk1NzAzMSAyNS4wOTk2MDkgQyAzMy45NzUwMzEgMjUuMDA5NjA5IDMzLjk5NTY3MiAyNC45MTgxMjUgMzQuMDEzNjcyIDI0LjgyODEyNSBDIDMzLjUzODY3MiAyNC4zNDUxMjUgMzIuNTE0MjY2IDIzLjcxMDgxMiAzMC42OTcyNjYgMjMuMTMyODEyIEMgMjguNDE4NzY2IDIyLjQwODMxMyAyNS40NTE1MTIgMjEuOTcwNTc5IDIyLjQ3MjY1NiAyMi4wMDk3NjYgeiBNIDE3LjUzOTA2MiAzMS40NzQ2MDkgTCAxNy4xMDkzNzUgMzEuNzY1NjI1IEMgMTcuMjkxMzc1IDMyLjA3MDYyNSAxNy41Mjc2ODggMzIuMzM5NSAxNy44MDQ2ODggMzIuNTYyNSBDIDE4LjAyMjY4NyAzMi42OTk1IDE4LjI3NjIwMyAzMi43Njc4NTkgMTguNTMzMjAzIDMyLjc1NTg1OSBDIDE4LjY2NDIwMyAzMi43NTQ4NTkgMTguNzk1ODc1IDMyLjczNDI2NiAxOC45MjE4NzUgMzIuNjk3MjY2IEwgMjAuMzU3NDIyIDMyLjE3OTY4OCBDIDIwLjQ1NDQyMiAzMi4xNDE2ODggMjAuNTU3MTA5IDMyLjEyMzA0NyAyMC42NjIxMDkgMzIuMTIzMDQ3IEMgMjAuODIwMTA5IDMyLjExMzA0NyAyMC45NzY0MjIgMzIuMTU1MTg3IDIxLjEwNzQyMiAzMi4yNDIxODggQyAyMS4yODg0MjIgMzIuMzkwMTg4IDIxLjQ0NjIxOSAzMi41NjM3NjYgMjEuNTc0MjE5IDMyLjc1OTc2NiBMIDIxLjk4NDM3NSAzMi41MzEyNSBMIDIxLjk4NDM3NSAzMi41MjE0ODQgQyAyMS44MDgzNzUgMzIuMjQ3NDg0IDIxLjU4NjA3OCAzMi4wMDI3ODEgMjEuMzMwMDc4IDMxLjgwMDc4MSBDIDIxLjEyNTA3OCAzMS42NTc3ODEgMjAuODgxODEzIDMxLjU4NDg0NCAyMC42MzI4MTIgMzEuNTg5ODQ0IEMgMjAuNTQ4ODEzIDMxLjU4Nzg0NCAyMC40NjQ2NzIgMzEuNjAzNzE5IDIwLjM4ODY3MiAzMS42MzY3MTkgTCAxOC44MzU5MzggMzIuMTU0Mjk3IEMgMTguNzM2OTM3IDMyLjE4NTI5NyAxOC42MzMyOTcgMzIuMTk5MzEzIDE4LjUyOTI5NyAzMi4xOTUzMTIgQyAxOC4zNDUyOTcgMzIuMjA4MzEyIDE4LjE2MjcxOSAzMi4xNTc3ODEgMTguMDExNzE5IDMyLjA1MDc4MSBDIDE3LjgyMzcxOSAzMS44ODY3ODEgMTcuNjYyMDYzIDMxLjY5MTYwOSAxNy41MzkwNjIgMzEuNDc0NjA5IHogTSAzMy40Njg3NSAzMi41MTE3MTkgQyAzMy4zMjA3NSAzMi41MjQ3MTkgMzMuMTg0Nzk3IDMyLjU5Njg5MSAzMy4wOTE3OTcgMzIuNzEyODkxIEMgMzIuOTc4Nzk3IDMyLjgwODg5MSAzMi45MDU2NzIgMzIuOTQ0Nzk3IDMyLjg4ODY3MiAzMy4wOTE3OTcgQyAzMi44Nzc2NzIgMzMuMTIzNzk3IDMyLjg3NzY3MiAzMy4xNTc0NTMgMzIuODg4NjcyIDMzLjE4OTQ1MyBDIDMzLjIyMjY3MiAzMy41NDI0NTMgMzMuNjUwMDk0IDMzLjc5MTIwMyAzNC4xMjEwOTQgMzMuOTA4MjAzIEMgMzQuNTkyMDk0IDM0LjA1MzIwMyAzNS4wNjQzOTEgMzQuMTkzMjY2IDM1LjUyNTM5MSAzNC4zMjIyNjYgQyAzNS45OTIzOTEgMzQuNDc3MjY2IDM2LjM4OTUzMSAzNC43OTQ4NDQgMzYuNjQ0NTMxIDM1LjIxNDg0NCBDIDM2LjY0OTUzMSAzNS4yMzM4NDQgMzYuNjQ5NTMxIDM1LjI1MjQ4NCAzNi42NDQ1MzEgMzUuMjcxNDg0IEMgMzYuNjQ0NTMxIDM1LjM1OTQ4NCAzNi40MzM0MzcgMzUuNTAzOTM3IDM2LjAyMzQzOCAzNS43MTA5MzggQyAzNS44MTY0MzcgMzUuODI5OTM3IDM1LjUwNDMyOCAzNi4wOTQyODEgMzQuOTg2MzI4IDM2LjQ4ODI4MSBDIDM0LjY2MzMyOCAzNi43NTIyODEgMzQuMzE3MTcyIDM2Ljk4NjUgMzMuOTUxMTcyIDM3LjE4NzUgQyAzMy42NDAxNzIgMzcuMzI2NSAzMy4zNjgyMDMgMzcuNTM4NTk0IDMzLjE1ODIwMyAzNy44MDg1OTQgQyAzMy4xNTMyMDMgMzcuODEzNTk0IDMzLjE0ODUzMSAzNy44MTkyMTkgMzMuMTQ0NTMxIDM3LjgyNDIxOSBDIDMyLjk3OTUzMSAzOC4wMTQyMTkgMzMuMDAwNDUzIDM4LjMwMTc5NyAzMy4xODk0NTMgMzguNDY2Nzk3IEMgMzMuMjg4NDUzIDM4LjU2MTc5NyAzMy40MTk2NDEgMzguNjEzMzI4IDMzLjU1NjY0MSAzOC42MTEzMjggQyAzMy42NTQ2NDEgMzguNjA5MzI4IDMzLjc1MDg5MSAzOC41ODUwNjMgMzMuODM3ODkxIDM4LjUzOTA2MiBDIDM0LjUwNTg5MSAzOC4xMTgwNjMgMzUuMTQ3NzY2IDM3LjY1NjI1IDM1Ljc1OTc2NiAzNy4xNTYyNSBDIDM2LjM4MDc2NiAzNi42NDIyNSAzNy4wMjUzMTMgMzYuMTU4OTM3IDM3LjY5NTMxMiAzNS43MTA5MzggQyAzOC4wNjgzMTIgMzUuNDgyOTM3IDM4LjI1IDM1LjI0NTk1MyAzOC4yNSAzNS4wMDE5NTMgQyAzOC4yMzggMzQuODM4OTUzIDM4LjE0OTcxOSAzNC42ODk1NjIgMzguMDExNzE5IDM0LjYwMTU2MiBDIDM3LjE5NTcxOSAzMy44Njg1NjMgMzYuMjI3NzM0IDMzLjMyMzgxMyAzNS4xNzc3MzQgMzMuMDA3ODEyIEwgMzUuMjUxOTUzIDMzLjAzMzIwMyBMIDM0LjUgMzIuNzA3MDMxIEMgMzQuMjQ3IDMyLjU5MjAzMSAzMy45NzUyNjYgMzIuNTI2NzE5IDMzLjY5NzI2NiAzMi41MTE3MTkgQyAzMy42MjEyNjYgMzIuNTAxNzE5IDMzLjU0NDc1IDMyLjUwMTcxOSAzMy40Njg3NSAzMi41MTE3MTkgeiBNIDEyLjgwNjY0MSAzMi41NjI1IEMgMTIuMTQ0NjQxIDMzLjA1OTUgMTEuNDE5MzkxIDMzLjQ2NzM5MSAxMC42NTAzOTEgMzMuNzc1MzkxIEMgOS44ODgzOTA2IDM0LjA4OTM5MSA5LjE2ODk1MzEgMzQuNDkxNTYzIDguNTAxOTUzMSAzNC45NzY1NjIgQyA4LjE3ODk1MzEgMzUuMjY1NTYzIDcuOTg5NDIxOSAzNS42NzgzMjggNy45ODI0MjE5IDM2LjExMTMyOCBDIDguMDIwNDIxOSAzNi4yNzUzMjggOC4xMzc5MjE5IDM2LjQxMTYwOSA4LjI5NDkyMTkgMzYuNDc0NjA5IEMgOC40MzQ5MjE5IDM2LjUyMTYwOSA4LjU3ODc1IDM2LjU3Nzc2NiA4LjcxODc1IDM2LjYzNDc2NiBDIDEwLjEzNDc1IDM3LjIzNTc2NiAxMS40NjMwMzEgMzcuODgyMjY2IDEyLjcwNzAzMSAzOC41NzIyNjYgQyAxMi44NzIwMzEgMzguNjkyMjY2IDEzLjAyNzgyOCAzOC44MjM3OTcgMTMuMTczODI4IDM4Ljk2Njc5NyBDIDEzLjI2ODgyOCAzOS4wMDc3OTcgMTMuMzcxNjA5IDM5LjAyODM0NCAxMy40NzQ2MDkgMzkuMDI3MzQ0IEMgMTMuNzI5NjA5IDM5LjAyOTM0NCAxMy45Nzc4MjggMzguOTQyMjk3IDE0LjE3MzgyOCAzOC43NzkyOTcgQyAxNC4zNzM4MjggMzguNjM2Mjk3IDE0LjQ3NzI2NiAzOC4zOTYzNDQgMTQuNDQ3MjY2IDM4LjE1MjM0NCBDIDE0LjQ1NTI2NiAzNy45NzMzNDQgMTQuMzUwNTk0IDM3LjgwOTE4OCAxNC4xODM1OTQgMzcuNzQyMTg4IEwgMTIuMDM5MDYyIDM2LjgwMDc4MSBDIDExLjMyODA2MiAzNi40OTg3ODEgMTAuNjM0Nzk3IDM2LjE1MTY3MiA5Ljk2Njc5NjkgMzUuNzYzNjcyIEMgMTAuNDM1Nzk3IDM1LjE3OTY3MiAxMS4wNjYyOTcgMzQuNzQ4NDg0IDExLjc3OTI5NyAzNC41MjE0ODQgQyAxMi40ODgyOTcgMzQuMjkzNDg0IDEzLjE0MjE3MiAzMy45MjA3MzQgMTMuNzAxMTcyIDMzLjQyNzczNCBDIDEzLjc4MTE3MiAzMy4zNTA3MzQgMTMuODI3MTcyIDMzLjI0MzgxMyAxMy44MjYxNzIgMzMuMTMyODEyIEMgMTMuODIyMTcyIDMyLjk3NTgxMyAxMy43NDcwNDcgMzIuODMwMzc1IDEzLjYyMzA0NyAzMi43MzQzNzUgQyAxMy40NzUwNDcgMzIuNjIwMzc1IDEzLjI5MjQ2OSAzMi41NTk1IDEzLjEwNTQ2OSAzMi41NjI1IEwgMTIuODA2NjQxIDMyLjU2MjUgeiBNIDI3Ljc5NDkyMiAzNC4wMjczNDQgQyAyNy4zNzU5MjIgMzQuMDEzMzQ0IDI2Ljk2ODE1NiAzNC4xNjMyNjYgMjYuNjYwMTU2IDM0LjQ0NzI2NiBDIDI2LjMxMjE1NiAzNC43OTEyNjYgMjYuMTY2NDM3IDM1LjI5MTUzMSAyNi4yNzM0MzggMzUuNzY5NTMxIEMgMjYuMzIxNDM3IDM2LjIyMDUzMSAyNi41MDEwMTYgMzYuNjQ3MDk0IDI2Ljc5MTAxNiAzNi45OTYwOTQgQyAyNy4wMzYwMTYgMzcuMzIyMDk0IDI3LjQxOTE3MiAzNy41MTU2MjUgMjcuODI2MTcyIDM3LjUxNTYyNSBDIDI4LjA5MzE3MiAzNy41MTE2MjUgMjguMzU1ODkxIDM3LjQ0MDU5NCAyOC41ODc4OTEgMzcuMzA4NTk0IEMgMjkuMDk3ODkxIDM2Ljk0NDU5NCAyOS4zNjYxMDkgMzYuMzI5MDMxIDI5LjI4NzEwOSAzNS43MDcwMzEgQyAyOS4yNjExMDkgMzUuMDA4MDMxIDI5LjA5NTUzMSAzNC41MzY1OTQgMjguNzY5NTMxIDM0LjMwODU5NCBDIDI4LjQ4MTUzMSAzNC4xMTY1OTQgMjguMTQwOTIyIDM0LjAxODM0NCAyNy43OTQ5MjIgMzQuMDI3MzQ0IHogTSAxOS43NTc4MTIgMzQuMDY0NDUzIEMgMTkuMzM5ODEzIDM0LjA0ODQ1MyAxOC45MzIwNDcgMzQuMTk3NTE2IDE4LjYyMzA0NyAzNC40Nzg1MTYgQyAxOC4yNzMwNDcgMzQuODIxNTE2IDE4LjEyNDUxNiAzNS4zMjE3ODEgMTguMjI4NTE2IDM1LjgwMDc4MSBDIDE4LjI3OTUxNiAzNi4yNTE3ODEgMTguNDU5MDk0IDM2LjY3NjM0NCAxOC43NDYwOTQgMzcuMDI3MzQ0IEMgMTguOTkwMDk0IDM3LjM1NDM0NCAxOS4zNzUyMDMgMzcuNTQ3ODc1IDE5Ljc4MzIwMyAzNy41NDY4NzUgQyAyMC4wNTAyMDMgMzcuNTQxODc1IDIwLjMxMjkyMiAzNy40NzA4NDQgMjAuNTQ0OTIyIDM3LjMzOTg0NCBDIDIxLjAxMDkyMiAzNy4wNTk4NDQgMjEuMjM4MjgxIDM2LjUzMTI4MSAyMS4yMzgyODEgMzUuNzM4MjgxIEMgMjEuMjk4MjgxIDM1LjIxODI4MSAyMS4xMTA0NjkgMzQuNzAwODQ0IDIwLjczMDQ2OSAzNC4zMzk4NDQgQyAyMC40NDI0NjkgMzQuMTQ5ODQ0IDIwLjEwMjgxMyAzNC4wNTM0NTMgMTkuNzU3ODEyIDM0LjA2NDQ1MyB6IE0gMTkuNzM2MzI4IDM1LjE3NzczNCBDIDIwLjAyMjMyOCAzNS4xNzc3MzQgMjAuMjUzOTA2IDM1LjQwOTMxMiAyMC4yNTM5MDYgMzUuNjk1MzEyIEMgMjAuMjUzOTA2IDM1Ljk4MTMxMyAyMC4wMjIzMjggMzYuMjE0ODQ0IDE5LjczNjMyOCAzNi4yMTQ4NDQgQyAxOS40NTAzMjggMzYuMjE0ODQ0IDE5LjIxODc1IDM1Ljk4MTMxMyAxOS4yMTg3NSAzNS42OTUzMTIgQyAxOS4yMTg3NSAzNS40MDkzMTIgMTkuNDUwMzI4IDM1LjE3NzczNCAxOS43MzYzMjggMzUuMTc3NzM0IHogTSAyNy42MzA4NTkgMzUuMjM0Mzc1IEMgMjcuOTE2ODU5IDM1LjIzNDM3NSAyOC4xNDg0MzggMzUuNDY3OTA2IDI4LjE0ODQzOCAzNS43NTM5MDYgQyAyOC4xNDg0MzggMzYuMDM5OTA2IDI3LjkxNjg1OSAzNi4yNzE0ODQgMjcuNjMwODU5IDM2LjI3MTQ4NCBDIDI3LjM0NDg1OSAzNi4yNzE0ODQgMjcuMTEzMjgxIDM2LjAzOTkwNiAyNy4xMTMyODEgMzUuNzUzOTA2IEMgMjcuMTEzMjgxIDM1LjQ2NzkwNiAyNy4zNDQ4NTkgMzUuMjM0Mzc1IDI3LjYzMDg1OSAzNS4yMzQzNzUgeiBNIDIyLjYxMTMyOCAzOC44NjkxNDEgQyAyMi42MDAzMjggMzguODgxMTQxIDIyLjU5MTkzNyAzOC44OTUxNTYgMjIuNTg1OTM4IDM4LjkxMDE1NiBMIDIyLjU4NTkzOCAzOC45NTExNzIgQyAyMi42NTY5MzggMzkuMTQ5MTcyIDIyLjc0NzQ2OSAzOS4zNDA0ODQgMjIuODU1NDY5IDM5LjUyMTQ4NCBDIDIyLjk1MzQ2OSAzOS42OTU0ODQgMjMuMDc1NzUgMzkuODUzMTg3IDIzLjIxODc1IDM5Ljk5MjE4OCBDIDIzLjM0Njc1IDQwLjEyNjE4OCAyMy40OTYxMDkgNDAuMjM2MzU5IDIzLjY2MjEwOSA0MC4zMTgzNTkgQyAyMy44MjYxMDkgNDAuMzg3MzU5IDI0LjAwMzY0MSA0MC40MjU2NDEgMjQuMTgxNjQxIDQwLjQzMTY0MSBMIDI0LjIwMTE3MiA0MC40NTMxMjUgQyAyNC4zNDQxNzIgNDAuNDU0MTI1IDI0LjQ4NzA5NCA0MC40MjcgMjQuNjIxMDk0IDQwLjM3NSBDIDI0Ljc0OTA5NCA0MC4zMjkgMjQuODcyMzc1IDQwLjI2MjY0MSAyNC45ODQzNzUgNDAuMTgxNjQxIEMgMjUuMDkwMzc1IDQwLjA5NjY0MSAyNS4xODgyOTcgNDAuMDAzMzQ0IDI1LjI3OTI5NyAzOS45MDIzNDQgQyAyNS4zNjQyOTcgMzkuODA2MzQ0IDI1LjQ0MTgxMyAzOS43MDI3OTcgMjUuNTA3ODEyIDM5LjU5MTc5NyBDIDI1LjU3MDgxMiAzOS40OTQ3OTcgMjUuNjI1ODI4IDM5LjM5MTE1NiAyNS42NzM4MjggMzkuMjg1MTU2IEMgMjUuNzA5ODI4IDM5LjIwODE1NiAyNS43Mzk3MTkgMzkuMTI4ODc1IDI1Ljc2MTcxOSAzOS4wNDY4NzUgTCAyNS43NjE3MTkgMzkgQyAyNS43NTA3MTkgMzguOTg2IDI1Ljc0MTM3NSAzOC45NzAxMjUgMjUuNzM0Mzc1IDM4Ljk1MzEyNSBDIDI1LjU5OTM3NSAzOS4xNjAxMjUgMjUuNDMyMjgxIDM5LjM0MzA5NCAyNS4yMzgyODEgMzkuNDk2MDk0IEMgMjUuMDg5MjgxIDM5LjYzNjA5NCAyNC45MTM3MDMgMzkuNzQ0NSAyNC43MjA3MDMgMzkuODEyNSBDIDI0LjUyNTcwMyAzOS44Nzk1IDI0LjMxOTI4MSAzOS45MTMxNTYgMjQuMTEzMjgxIDM5LjkxMDE1NiBDIDIzLjkzODI4MSAzOS45MTMxNTYgMjMuNzYzNzAzIDM5Ljg4OTg5MSAyMy41OTU3MDMgMzkuODM3ODkxIEMgMjMuNDUxNzAzIDM5Ljc5MTg5MSAyMy4zMTcyNjYgMzkuNzIxODU5IDIzLjE5NzI2NiAzOS42MzA4NTkgQyAyMy4wNzYyNjYgMzkuNTMzODU5IDIyLjk2NjA5NCAzOS40MjE4MjggMjIuODcxMDk0IDM5LjI5ODgyOCBDIDIyLjc3MTA5NCAzOS4xNjM4MjggMjIuNjgzMzI4IDM5LjAyMDE0MSAyMi42MTEzMjggMzguODY5MTQxIHogTSAyMS4yMzgyODEgNDAuODYxMzI4IEMgMTkuMTY2MjgxIDQwLjk3MDMyOCAxNy45NjAzMTIgNDMuNjMyNzM0IDE1LjA3MDMxMiA0MS4xNzc3MzQgQyAxNC4yODMzMTIgNDUuODkxNzM0IDIwLjA0MzE1NiA0Ni4zNTc1MTYgMjIuNDEwMTU2IDQ0LjIyODUxNiBDIDI0LjA0NjE1NiA0Mi43Njc1MTYgMjMuNTg0MjgxIDQwLjczMTMyOCAyMS4yMzgyODEgNDAuODYxMzI4IHogTSAyNS45ODQzNzUgNDAuODYxMzI4IEMgMjQuMDA2NTY5IDQwLjk4MzI0MyAyMy42OTc3MzQgNDIuODU4ODI4IDI1LjIzMjQyMiA0NC4yMjg1MTYgQyAyNy41OTk0MjIgNDYuMzU3NTE2IDMzLjM1OTI2NiA0NS44OTE3MzQgMzIuNTcyMjY2IDQxLjE3NzczNCBDIDI5LjY4MjI2NiA0My42MzI3MzQgMjguNDc0MzQ0IDQwLjk3MDMyOCAyNi40MDIzNDQgNDAuODYxMzI4IEMgMjYuMjU1NzE5IDQwLjg1MzIwMyAyNi4xMTYyMjkgNDAuODUzMiAyNS45ODQzNzUgNDAuODYxMzI4IHoiLz48L3N2Zz4="
                  />
                  Codechef
                </a>
              </li>
            </ul>
          </div>
        </div>
      </main>
    </>
  );
}

export default App;
