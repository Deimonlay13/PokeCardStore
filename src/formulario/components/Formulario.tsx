import { Form, Row, Col, Button, Container, Figure } from "react-bootstrap"
import "./Formulario.css"
import { useState, type FormEvent } from "react";


export const Formulario = () => {
    const [validated, setValidated,] = useState(false);
    const [showSuccess, setShowSuccess] = useState(false)
  const handleSubmit = (event: FormEvent<HTMLFormElement>) => {
  event.preventDefault();
  const form = event.currentTarget;

  if (form.checkValidity()) {
    setValidated(true);
    setShowSuccess(true);
    setTimeout(() => setShowSuccess(false), 3500);
  } else {
    event.stopPropagation();
    setValidated(true);
    setShowSuccess(false);
  }
};



  return (
        
    <Container className="py-5">
        <Figure>
            <Figure.Image width={171} height={180}alt="171x180"src="https://tcg.pokemon.com/assets/img/global/logos/en-us/tcg-logo.png"/>
            <Figure.Caption>  </Figure.Caption>
        </Figure>
        
            <h2 className="section-title">Contacto</h2>
                <div className="subtitle text-center text-lg-start">
                    <h2>¿Trabajamos juntos?</h2>
                        <p>
                            Si tienes un proyecto en mente o quieres colaborar, no dudes en
                            contactarme. Respondo en menos de 24 horas.
                        </p>
                </div>
            <Row className="gy-5 align-items-start">
                <Col lg={6} className="mt-5">
                    <div className="contact-content">
                    <div className="contact-form">
                    <div className="contact-info">
                        
                       
                        <div className="contact-item">
                            
                            <div className="map-container">
                                    <iframe src="https://www.google.com/maps/embed?pb=!1m14!1m12!1m3!1d106366.40128309396!2d-70.6871296!3d-33.5806464!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!5e0!3m2!1ses!2scl!4v1757213290182!5m2!1ses!2scl" width="1000" height="600" style={{border:0}} allowFullScreen loading="lazy"referrerPolicy="no-referrer-when-downgrade"/>
                            </div>
                            <div className="contact-item-info">
                            <p><i className="bi bi-geo-alt-fill text-warning"></i><strong> Ubicación:</strong> Santiago, Chile</p>
                            </div>
                            <div className="contact-info">
                            <p><i className="bi bi-envelope-arrow-up-fill text-warning"></i><strong> Email:</strong> pokemon@email.com</p>
                        </div>
                        <div className="contact-item">
                            <p><i className="bi bi-telephone-inbound-fill text-warning"></i><strong> Teléfono:</strong> +569 1234 5678 </p>                      
                        </div>
                        </div>
                    </div>    
                    </div>
                    </div>
                </Col>
                <Col lg={6} className="mt-5 ">
                    <div className="contact-content">
                        <Form noValidate validated={validated} onSubmit={handleSubmit}className="contact-form">
                                <Form.Group className="form-group mb-3" controlId="nombre">
                                    <Form.Label>Nombre</Form.Label>
                                    <Form.Control required type="text" placeholder="Rodrigo" />
                                    <Form.Control.Feedback type="invalid">
                                        Por favor ingresa tu nombre
                                    </Form.Control.Feedback>   
                                </Form.Group>

                                <Form.Group className="form-group mb-3"controlId="email">
                                    <Form.Label>Email</Form.Label>
                                    <Form.Control required type="email" placeholder="name@duocuc.cl" />
                                    <Form.Control.Feedback type="invalid">
                                        ingresa un email valido
                                    </Form.Control.Feedback> 
                                </Form.Group>

                                <Form.Group className="form-group mb-3" controlId="telefono">
                                    <Form.Label>Teléfono</Form.Label>
                                    <Form.Control required type="tel" placeholder="+569 12345678" />
                                    <Form.Control.Feedback type="invalid">
                                        ingresa tu número de telefono
                                    </Form.Control.Feedback> 
                                </Form.Group>

                            <Form.Group className="form-group mb-3" controlId="motivo">
                                <Form.Label>Motivo</Form.Label>
                                <Form.Select required aria-label="Motivo de contacto">
                                    <option value="">-- Selecciona una opción --</option>
                                    <option value="consulta">Consulta general</option>
                                    <option value="presupuesto">Solicitar presupuesto</option>
                                    <option value="colaboracion">Propuesta de colaboración</option>
                                    <option value="otro">Otro motivo</option>
                                </Form.Select>
                                <Form.Control.Feedback type="invalid">
                                        Seleciona un motivo de contacto
                                </Form.Control.Feedback> 
                            </Form.Group>

                            <Form.Group className="form-group mb-3" controlId="asunto">
                                <Form.Label>Asunto</Form.Label>
                                <Form.Control required type="text" placeholder="asunto..." />
                                <Form.Control.Feedback type="invalid">
                                        Escribe un Asunto
                                </Form.Control.Feedback> 
                            </Form.Group>

                            <Form.Group className="form-group mb-4" controlId="mensaje">
                                <Form.Label>Mensaje</Form.Label>
                                <Form.Control required as="textarea" rows={4} />
                                <Form.Control.Feedback type="invalid">
                                        Escribe tu mensaje
                                </Form.Control.Feedback> 
                            </Form.Group>
                            <Button type="submit" className="btn btn-primary btn-full">Enviar Mensaje</Button>
                            {showSuccess && ( <div className="alert alert-success mt-3 text-center">✅ ¡Mensaje enviado con éxito!</div>)}

                            
                        </Form>
                    </div>
                </Col>

                            
                
        </Row>
    </Container>
  )
}
