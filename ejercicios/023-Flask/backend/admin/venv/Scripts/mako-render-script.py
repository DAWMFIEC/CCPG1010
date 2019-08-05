#!c:\users\pc\documents\espol\daw\2019-1t\ejercicios\023-flask\backend\admin\venv\scripts\python.exe
# EASY-INSTALL-ENTRY-SCRIPT: 'Mako==1.1.0','console_scripts','mako-render'
__requires__ = 'Mako==1.1.0'
import re
import sys
from pkg_resources import load_entry_point

if __name__ == '__main__':
    sys.argv[0] = re.sub(r'(-script\.pyw?|\.exe)?$', '', sys.argv[0])
    sys.exit(
        load_entry_point('Mako==1.1.0', 'console_scripts', 'mako-render')()
    )
