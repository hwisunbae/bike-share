# Getting Started With Bike Share System

---
With this bike share system, You will experience how easy to find out where the bikes are around you and check in/out whenever needed.
What you need for this system is your credential id/pw with credit card. It is easy pay-and-go system.

## How To Set Up For Bike Share System

---
### Mac version

1. Run the followings to clone the repo
    ```bash
    git clone https://stgit.dcs.gla.ac.uk/psdm/2020/lab-02-1c/lab02_group_1c_bike_share_system.git
    cd lab02_group_1c_bike_share_system
    source bin/activate
    pip install -r requirements.txt
    ```


2. Open the project with *PyCharm*


3. Change the file path `apps\admin` to `apps/admin` inside this file `bike_rent/bike_rent/settings.py` as follows
    ```python
    sys.path.insert(0, os.path.join(BASE_DIR, 'apps/admin'))
    sys.path.insert(0, os.path.join(BASE_DIR, 'apps/user'))
    ```
   
4. Go to `Preference > Project Interpreter` and Check if Python Interpreter downloaded its dependencies as follows
   ![alt Preferences_screenshot](src/img/screenshot/mac_pref.png)
   

5. Go to `Edit Configurations` and Set as follows
   * Script path as `lab02_group_1c_bike_share_system/src/manage.py`
   * Parameters as `runserver`
   * Python interpreter as `Python 3.8`; the one you set in step 4
   * working directory as `lab02_group_1c_bike_share_system/src`
   
   ![alt Preferences_screenshot](src/img/screenshot/mac_config.png)

6. Run the server!
   
* Install mysql if you encounter `'_mysql' is not defined` error
    ```bash
    brew install mysql
    brew install mysql-connector-c
    ```

### Windows version
1. blahblah
