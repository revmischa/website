import React, { ReactElement } from "react"

import Nav from "../components/Nav"
import Layout from "../components/Layout"

interface Props {}

interface ProjectProps {
  title: string
  description: string
  href: string
}

function Project({ title, href, description }: ProjectProps): ReactElement {
  return (
    <div className="rounded-lg bg-gray-900 mb-4 p-4 flex-1 m-2 flex flex-col items-start justify-between"></div>
  )
}

const cdkDevBase = "https://github.com/cdk-dev"
const projects: ProjectProps[] = [
  {
    title: "Bump CDK",
    description: " Easily manage AWS CDK Dependencies ",
    href: `${cdkDevBase}/bump-cdk`,
  },
  {
    title: "Bump CDK (Github Action)",
    description: " GitHub Action for automating cdk version management",
    href: `${cdkDevBase}/bump-cdk-action`,
  },
  {
    title: "Create CDK App",
    description: "Create CDK apps from templates",
    href: `${cdkDevBase}/create-cdk-app`,
  },
  {
    title: "projen",
    description:
      "Define and maintain complex project configuration through code",
    href: `https://github.com/eladb/projen`,
  },
  {
    title: "jsii-publish",
    description:
      "Dockerfile and GitHub action for publishing JSII packages. Package building and publishing to npm, PyPI, NuGet and Maven (GitHub)",
    href: `https://github.com/udondan/jsii-publish`,
  },
  {
    title: "RocketCDK",
    description:
      "Update versions of your packages and CDK version in one command. Works with TS and Python",
    href: `https://www.npmjs.com/package/rocketcdk`,
  },
]

function Tools(props: Props): ReactElement {
  return (
    <Layout>
      <Nav title="Tools" />

      <div className="py-10">
        <header>
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <h1 className="text-3xl font-bold leading-tight text-gray-900">
              CDK Dev Tools
            </h1>
          </div>
        </header>
        <main>
          <div className="max-w-7xl mx-auto sm:px-6 lg:px-8 text-gray-900">
            <div className="px-4 py-8 sm:px-0">
              <p className="mb-8">
                This is a collection of tools to help during the development of
                CDK applications.
              </p>
            </div>

            <div className="flex flex-row mb-8">
              {projects.map((project) => (
                <Project {...project} />
              ))}
            </div>

            <div className="p-8 flex flex-col">
              <h3 className="text-3xl mb-6 text-center">
                Want to contribute or learn more?
              </h3>

              <a href="https://github.com/cdk-dev" className="mx-auto mb-4">
                <div
                  className={`rounded-full bg-gray-700 inline-block px-6 py-3`}
                >
                  View on GitHub
                </div>
              </a>
            </div>
          </div>
        </main>
      </div>
    </Layout>
  )
}

export default Tools
