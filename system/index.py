from flask import (
  Blueprint,
  render_template,
  url_for,
  )
import os, socket


bp = Blueprint('index', __name__)
@bp.route('/')
def index():
    osname = os.uname()[0]
    systemname = os.uname()[1]
    hostname = socket.gethostname()
    ipaddr = socket.gethostbyname(hostname)
    return render_template('index.html', name=osname, ip=ipaddr, sys_=systemname)
