import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';

export default function About() {
  return (
    <div className="container my-5">
      <div className="row">
        <div className="col-md-6">
          <img
            src="https://weblium.com/blog/wp-content/uploads/2021/05/19-Best-About-Me-Page-Examples-and-How-to-Write-a-Killer-About-Me-Page-1-1-1.png"
            alt="Profile"
            className="img-fluid rounded"
          />
        </div>
        <div className="col-md-6">
          <h2 className="mb-4">About Me</h2>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. In auctor tellus sit amet ligula facilisis,
            vitae pretium lectus molestie. Maecenas euismod turpis at elit sollicitudin, sit amet sodales mauris
            vestibulum. Nunc vel dolor faucibus, suscipit sapien et, cursus leo. Aenean porttitor nunc urna, ac
            bibendum urna blandit eu. Etiam maximus convallis est, eu malesuada turpis consequat id. Nullam
            tincidunt nulla purus, sed euismod augue suscipit sed. Fusce in ante eget quam fringilla faucibus.
            Integer euismod quam ac lectus varius, eget bibendum dolor accumsan.
          </p>
          <p>
            Vivamus et semper tortor. In a nisl sit amet justo ultrices dignissim at a risus. Sed ornare
            consequat fringilla. Integer lacinia elit odio, non ornare tellus finibus at. Etiam eget
            fermentum risus. Nullam eu sapien a quam ultricies hendrerit vitae ac augue. Vestibulum
            fermentum dui sit amet varius sagittis.
          </p>
        </div>
      </div>
    </div>
  );
}
