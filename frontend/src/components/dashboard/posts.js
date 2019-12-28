import React, { useState, useEffect } from "react";
import { MDBDataTable } from "mdbreact";
import { formatCreatedAt } from "../../helpers/dateHelper";

const DashboardPosts = props => {
  const [data, setData] = useState({ columns: [], rows: [] });

  useEffect(() => {
    const updatePosts = async () => {
      await props.getterFunc().then(data => {
        updateData(data);
      });
    };
    updatePosts();
  }, []);

  const updateData = posts => {
    let result = {
      columns: [{ label: "", field: "post", sort: "asc" }],
      rows: []
    };

    posts.forEach(post => {
      const p = {
        post: (
          <div className="post">
            <h4 className="title">{post.title}</h4>
            <div className="created-data">
              <span>{formatCreatedAt(post.createdAt)}</span>
            </div>
            <div
              dangerouslySetInnerHTML={{ __html: post.content.html }}
              className="content"
            />
          </div>
        )
      };
      result.rows.push(p);
    });

    setData(result);
  };

  return (
    <section className="dashboard-table-container">
      <MDBDataTable
        borderless
        small
        data={data}
        displayEntries={false}
        info={false}
        searching={false}
        entries={3}
        paginationLabel={["-", "+"]}
        noRecordsFoundLabel="Brak aktualności"
      />
    </section>
  );
};

export default DashboardPosts;
