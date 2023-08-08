import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { FetchBlogCategorieSlice } from '../../../Reducer/Slice/BlogCategorieSlice'
import { Audio } from 'react-loader-spinner'
import { Link } from 'react-router-dom'

const Categorie = () => {
  const { blog_categorie } = useSelector((state) => state?.blogcategorie)
  const dispatch = useDispatch()

  useEffect(() => {
    dispatch(FetchBlogCategorieSlice())
    console.log('c', blog_categorie);
  }, [])
  return (
    <>

      <h3 className="sidebar-title">Categories</h3>
      <div className="sidebar-item categories">
        <ul>


          {
            blog_categorie !== null ? (
              <>
                {
                  blog_categorie?.data?.map((item,key) => {
                    return (
                      <>
                        <li key={key + 1}><Link to={`/category/post/${item._id}`}>{item?.category} <span>{item?.category?.length}</span></Link></li>
                      </>
                    )
                  })
                }
              </>
            ) : (
              <>
                <div style={{ width: "100%", display: "flex", justifyContent: "center", padding: "150px" }}>
                  <Audio
                    height="100"
                    width="100"
                    color="#4fa94d"
                    ariaLabel="audio-loading"
                    wrapperStyle={{}}
                    wrapperClass="wrapper-class"
                    visible={true}
                  />
                </div>
              </>
            )
          }

        </ul>

      </div>


    </>
  )
}

export default Categorie