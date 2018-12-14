import React from 'react'
import PropTypes from 'prop-types'
import { kebabCase } from 'lodash'
import Helmet from 'react-helmet'
import { graphql, Link } from 'gatsby'
import Layout from '../components/Layout'

export const CityPageTemplate = ({
  perfectPlansEs,
  perfectPlansEn,
  perfectPlansPt,
  toursEs,
  toursEn,
  toursPt,
  title,
  helmet,
}) => {
  return (
    <section className="section">
      {helmet || ''}
      <h1>
        Hola {title}
      </h1>
      <div>
        <div>Planes perfectos</div>
        <p>{perfectPlansEs}</p>
      </div>
      <div>
        <div>Tours y actividades</div>
        <p>{toursEs}</p>
      </div>
    </section>
  )
}

CityPageTemplate.PropTypes = {
  title: PropTypes.string,
  perfectPlansEs: PropTypes.string,
  perfectPlansEn: PropTypes.string,
  perfectPlansPt: PropTypes.string,
  toursEs: PropTypes.string,
  toursEn: PropTypes.string,
  toursPt: PropTypes.string,
  helmet: PropTypes.object
}

const CityPage = ({data}) => {
  const { markdownRemark: post } = data

  return (
    <Layout>
      <CityPageTemplate
        title={post.frontmatter.title}
        perfectPlansEs={post.frontmatter.perfectPlansEs}
        toursEs={post.frontmatter.toursEs}
      />
    </Layout>
  )
}

CityPage.PropTypes = {
  data: PropTypes.shape({
    markdownRemark: PropTypes.object,
  }),
}

export default CityPage

export const cityPageQuery = graphql`
  query CityPageByID($id: String!) {
    markdownRemark(id: { eq: $id }) {
      id
      frontmatter {
        title
        perfectPlansEs
        toursEs
      }
    }
  }
`