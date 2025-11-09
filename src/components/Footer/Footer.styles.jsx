import styled from "styled-components";

export const FooterContainer = styled.div`
footer{
    padding-top: 5rem;
    background-color: #f8f8f8;
}
  .footer-links a,
  .social-link {
    color: var(--bs-muted);
    transition: color 0.3s ease-in-out;
  }
  


.footer-links a {
  text-decoration: none;
}


.footer-links a:hover,
.social-link:hover {
  color: var(--bs-primary);
}
`