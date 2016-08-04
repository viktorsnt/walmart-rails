import React from 'react';

export function Footer() {
  return (
    <div>
    <div className="social"><h2 className="title">Walmart.com nas redes sociais</h2><ul className="social-list"><li className="social-items"><a href="https://www.facebook.com/walmart.com" title="Facebook" target="_blank"><i className="wm-icon wm-icon-circle icon-facebook"></i><span className="social-name">Facebook</span></a></li><li className="social-items"><a href="https://twitter.com/walmartcom/" title="Twitter" target="_blank"><i className="wm-icon wm-icon-circle icon-twitter"></i><span className="social-name">Twitter</span></a></li><li className="social-items"><a href="https://plus.google.com/u/0/+MundoWalmart/posts" title="Google Plus" target="_blank"><i className="wm-icon wm-icon-circle icon-google-plus"></i><span className="social-name">Google Plus</span></a></li><li className="social-items"><a href="https://www.instagram.com/walmartcom/" title="Instagram" target="_blank"><i className="wm-icon wm-icon-circle icon-instagram"></i><span className="social-name">Instagram</span></a></li><li className="social-items"><a href="https://www.youtube.com/user/mundowalmart" title="Youtube" target="_blank"><i className="wm-icon wm-icon-circle icon-youtube"></i><span className="social-name">Youtube</span></a></li></ul></div>
    <div className="footer">
      <p>WMB COMÉRCIO ELETRÔNICO LTDA.</p>
      <p>CNPJ/MF:14.314.050/0001-58 Inscrição Estadual: 206.159.582.118</p>
      <p>Endereço: Avenida Tamboré, 267, 8º andar, Alphaville, Barueri, SP, CEP 06460-000</p>
      <p><a href="mailto:atendimento@walmart.com.br">atendimento@walmart.com.br</a></p>
    </div>
    </div>
  );
}

export default Footer;
