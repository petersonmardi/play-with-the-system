from flask import (
  Blueprint,
  render_template,
  url_for,
  )
import os, socket

  
bp = Blueprint('index', __name__)
@bp.route('/')
def index():
    systemname = os.uname()[0]
    
    hostname = socket.gethostname()
    ipaddr = socket.gethostbyname(hostname)
    return render_template('index.html', name=systemname, ip=ipaddr)