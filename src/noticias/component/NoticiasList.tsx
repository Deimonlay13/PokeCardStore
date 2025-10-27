import React from "react";
import { Card, Row, Col } from "react-bootstrap";
import type { Noticia } from "../interface/noticia.interface";

interface Props {
  noticias: Noticia[];
}

export const NoticiasList: React.FC<Props> = ({ noticias }) => {
   return (
     <div className="noticias-container px-5 pt-5">
       {noticias.map((noticia) => (
         <a
           key={noticia.id}
           href={noticia.url}
           target="_blank"
           rel="noopener noreferrer"
           className="text-decoration-none"
         >
           <Card className="news-card mb-4 shadow-sm">
             <Row className="g-0 align-items-center">
               <Col xs={12} md={4}>
                 <Card.Img
                   src={noticia.imagen}
                   alt={noticia.titulo}
                   className="news-card-img"
                 />
               </Col>
               <Col xs={12} md={8}>
                 <Card.Body>
                   <Card.Text className="text-muted mb-1">
                     {noticia.fecha}
                   </Card.Text>
                   <Card.Title>{noticia.titulo}</Card.Title>
                   <Card.Text className="mb-0">{noticia.descripcion}</Card.Text>
                 </Card.Body>
               </Col>
             </Row>
           </Card>
         </a>
       ))}
     </div>
   );
};
