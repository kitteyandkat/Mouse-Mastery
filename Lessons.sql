--
-- PostgreSQL database dump
--

-- Dumped from database version 14.7
-- Dumped by pg_dump version 14.7

SET statement_timeout = 0;
SET lock_timeout = 0;
SET idle_in_transaction_session_timeout = 0;
SET client_encoding = 'UTF8';
SET standard_conforming_strings = on;
SELECT pg_catalog.set_config('search_path', '', false);
SET check_function_bodies = false;
SET xmloption = content;
SET client_min_messages = warning;
SET row_security = off;

SET default_tablespace = '';

SET default_table_access_method = heap;

--
-- Name: content; Type: TABLE; Schema: public; Owner: postgres
--

CREATE TABLE public.content (
    id integer NOT NULL,
    module_number character varying(255),
    device_type character varying(255),
    subject character varying(255),
    step1 text,
    step2 text,
    step3 text,
    step4 text,
    recap text
);


ALTER TABLE public.content OWNER TO postgres;

--
-- Name: content_id_seq; Type: SEQUENCE; Schema: public; Owner: postgres
--

CREATE SEQUENCE public.content_id_seq
    AS integer
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1;


ALTER TABLE public.content_id_seq OWNER TO postgres;

--
-- Name: content_id_seq; Type: SEQUENCE OWNED BY; Schema: public; Owner: postgres
--

ALTER SEQUENCE public.content_id_seq OWNED BY public.content.id;


--
-- Name: lessons; Type: TABLE; Schema: public; Owner: postgres
--

CREATE TABLE public.lessons (
    id integer NOT NULL,
    module_number character varying(10),
    title character varying(255)
);


ALTER TABLE public.lessons OWNER TO postgres;

--
-- Name: quiz; Type: TABLE; Schema: public; Owner: postgres
--

CREATE TABLE public.quiz (
    id integer NOT NULL,
    device_type character varying(255),
    module_number integer,
    question_number integer,
    question text,
    option1 text,
    option2 text,
    option3 text,
    option4 text,
    correct_option text
);


ALTER TABLE public.quiz OWNER TO postgres;

--
-- Name: quiz_id_seq; Type: SEQUENCE; Schema: public; Owner: postgres
--

CREATE SEQUENCE public.quiz_id_seq
    AS integer
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1;


ALTER TABLE public.quiz_id_seq OWNER TO postgres;

--
-- Name: quiz_id_seq; Type: SEQUENCE OWNED BY; Schema: public; Owner: postgres
--

ALTER SEQUENCE public.quiz_id_seq OWNED BY public.quiz.id;


--
-- Name: steps; Type: TABLE; Schema: public; Owner: postgres
--

CREATE TABLE public.steps (
    lesson_id integer,
    step_order integer,
    widget_type character varying(50),
    x_coord integer,
    y_coord integer,
    step_text text,
    device_type text
);


ALTER TABLE public.steps OWNER TO postgres;

--
-- Name: content id; Type: DEFAULT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public.content ALTER COLUMN id SET DEFAULT nextval('public.content_id_seq'::regclass);


--
-- Name: quiz id; Type: DEFAULT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public.quiz ALTER COLUMN id SET DEFAULT nextval('public.quiz_id_seq'::regclass);


--
-- Data for Name: content; Type: TABLE DATA; Schema: public; Owner: postgres
--

COPY public.content (id, module_number, device_type, subject, step1, step2, step3, step4, recap) FROM stdin;
1	Module 1	Desktop	Introduction	Step 1	Step 2	Step 3	Step 4	Recap
2	windows	Introduction	Welcome to Windows module of Mouse Mastery. In this section you will learn how to navigate the settings, create and save files, access the internet on your computer.	n/a	n/a	n/a	n/a	n/a
4	0001	windows	Desktop	The Desktop is the main screen that you see when you turn on your computer. You can also right-click on the desktop to access different settings.	n/a	n/a	n/a	n/a
5	0001	windows	Desktop	Right click on your desktop.	You can arrange your desktop just like you would a physical desktop. Select "New" and then "Folder" to create a new folder on the desktop.	Type a name for the folder and press Enter. You have just created a folder and saved it on your desktop.	\N	In this exercise, we explored the Desktop on our Windows computer. The Desktop is the main screen that we see when we start our computer. We learned that we can right-click on the desktop to access different settings. We created a folder and saved it on our desktop.
7	0001	windows	Taskbar	Find a program that is currently open on Taskbar and click on it.	The program will open and show up on the screen. You can start using the program immediately	Look at the pictures on the Taskbar and the words on the Desktop. See how the words on the Desktop tell you the names of the programs.	On the Taskbar click on the same icon for the program you just opened. It will disappear. Click it again and it will re-appear. This is known as minimize or maximize	In this exercise we learned about the Taskbar in Windows. The Taskbar is a long bar located at the bottom of the screen that has icons for open or pinned programs. We reopened a program that was open and it re-appeared on the screen to allow us to use it. We learned the Taskbar uses pictures for icons while the Desktop provides the name and pictures of icons.
8	0002	windows	File Explorer	File Explorer is how you find and open files. It is like a filing cabinet where you can find and open different types of files.	It is a folder icon on the Taskbar.	n/a	n/a	n/a
9	0002	windows	File Explorer	Click on your "File Explorer" folder icon	A window will open up showing different files and folders on your computer. Double-click on the "Documents" folder to open it.	You may find documents, spreadsheets, or presentations. Try opening one of the files by double-clicking on it.	Try navigating to other folders like "Pictures" or "Music" to see what files are stored there.	In this exercise, you learned about File Explorer, which is like a filing cabinet for your computer files. File Explorer makes it easy to find and open your files on the computer. By clicking on the folder icon on the Taskbar, you opened a window with different files and folders. You explored the Documents folder and practiced opening files by double-clicking on them. You can also check out other folders like Pictures or Music to see what files are there.
10	0002	windows	Settings	In Windows, a "setting" is a way to change how your computer works. For example, you can change the color of your desktop background or adjust the volume of your speakers.	n/a	n/a	n/a	n/a
\.


--
-- Data for Name: lessons; Type: TABLE DATA; Schema: public; Owner: postgres
--

COPY public.lessons (id, module_number, title) FROM stdin;
1	0001	Introduction
2	0001	Start Menu
3	0001	Start Menu - Click on your "Start" Menu
4	0001	Desktop
5	0001	Desktop
6	0001	Taskbar
7	0001	Taskbar
8	0002	File Explorer
9	0002	File Explorer
10	0002	Settings
11	0002	Settings
12	0002	Folder
13	0002	Folder
14	0002	Cut, Copy and Paste
15	0002	Cut, Copy and Paste
16	0003	Wifi
17	0003	WiFi
18	0003	Internet
19	0003	Internet
20	0004	Email
21	0004	Email
22	0001	Phone Call
23	0001	Phone Call
24	0002	Writing Texts
25	0002	Writing Texts
26	0003	WiFi
27	0003	WiFi
28	0004	Contacts
29	0004	Contacts
30	0001	Phone Call
31	0001	Phone Call
32	0002	Writing Texts
33	0002	Writing Texts
34	0003	WiFi
35	0003	WiFi
36	0004	Contacts
37	0004	Contacts
38	0001	Introduction
39	0001	Dock
40	0001	Dock
41	0002	Desktop
42	0002	Launchpad
43	0002	Finder
44	0002	System Preferences
45	0002	Folder
46	0002	Cut, Copy and Paste
47	0003	WiFi
48	0003	Internet
49	0003	Internet
50	0004	Email
\.


--
-- Data for Name: quiz; Type: TABLE DATA; Schema: public; Owner: postgres
--

COPY public.quiz (id, device_type, module_number, question_number, question, option1, option2, option3, option4, correct_option) FROM stdin;
1	ios	1	1	What are the main features of the Phone app?	a) Camera, messages, and settings	b) Keypad, contacts, and recent calls	c) Music, videos, and podcasts	\N	2
2	ios	1	2	2.How can you dial a number using the Phone app?	a) By speaking the number into the microphone	b) By selecting a contact from the address book	c) By entering the number manually using the keypad	\N	3
3	ios	1	3	How do you initiate a call using the Phone app?	a) By tapping the green phone icon	b) By tapping the red phone icon	c) by tapping the yellow phone icon	\N	1
4	ios	1	4	How do you end a call using the Phone app?	a) By tapping the green phone icon	b) By tapping the red phone icon	c) By tapping the yellow phone icon	\N	2
5	ios	2	1	What are the main features of the Messages app?	a) Keypad, contacts, and recent messages	b) Conversations, compose button, and keyboard	c) Camera, photos, and videos	\N	2
6	ios	2	2	How can you choose a contact within the Messages app?	a) By speaking the contact's name into the microphone	b) By selecting a contact from the list of suggested contacts	c) By searching for a contact using the search bar	d) All of the above	4
7	ios	2	3	How can you compose a message within the Messages app?	a) By typing on the keyboard within the text box	b) By using emojis or adding attachments	c) Both a and b	\N	3
8	ios	2	4	How do you send a message within the Messages app?	a) By tapping the send button within the text box	b) By shaking the device	c) By tapping the home button	\N	1
9	ios	3	1	What is the first step in connecting to a WiFi network on your iOS device?	a) Selecting the Wi-Fi tab	b) Choosing a network from the list	c) Opening the Settings app	\N	3
10	ios	3	2	Where can you find the password prompt when connecting to a secured network?	a) In the Wi-Fi menu	b) In the Bluetooth menu	c) In the Cellular menu	\N	1
11	ios	3	3	How do you know if your device is successfully connected to a network?	a) A question mark next to the network name	b) A red X next to the network name	c) A checkmark next to the network name	\N	3
12	ios	3	4	Why is it important to connect to a WiFi network on your iOS device?	a) To make phone calls	b) To browse the internet	c) To charge your device	\N	2
13	ios	4	1	What is the Contacts app used for on your iOS device?	a) Browsing the internet	b) Saving and managing your contacts	c) Playing games	\N	2
14	ios	4	2	Where can you find the add button in the Contacts app?	a) In the top-left corner	b) In the top-right corner	c) In the bottom-left corner	\N	2
15	ios	4	3	What kind of information can you store in a contact's profile?	a) Only their name and phone number	b) Only their email address and physical address	C) Their name, phone number, email address, and physical address	\N	3
16	ios	4	4	How do you save a new contact in the Contacts app?	a) Tap the "Add" button	b) Tap the "Done" button	C) Tap the "Save" button	\N	2
17	android	1	1	How do you open the phone app on an Android device?	a) Tap the Messages app	b) Tap the Camera app	c) Tap the Phone app	d) Tap the Calendar app	3
18	android	1	2	How do you make a phone call on an Android device?	a) Open the Phone app, enter the phone number and tap the call button	b) Open the Camera app, enter the phone number and tap the call button	c) Open the Messages app, enter the phone number and tap the call button	d) Open the Settings app, enter the phone number and tap the call button	1
19	android	1	3	How do you receive an incoming call on an Android device?	a) Swipe left to the call	b) Swipe right to the call	c) Tap the screen to the call	d) Press the volume button to the call	3
20	android	1	4	How do you end a phone call on an Android device?	a) Press the back button	b) Tap the hang-up button	c) Shake the device	\N	2
21	android	2	1	How do you open the Messages app on Android?	a) By tapping the Contacts app icon	b) By tapping the Phone app icon	c) By tapping the Messages app icon	d) By tapping the Email app icon	3
22	android	2	2	How do you compose a new message on Android?	a) By tapping the pencil icon in the Messages app	b) By tapping the camera icon in the Messages app	c) By tapping the microphone icon in the Messages app	d) By tapping the settings icon in the Messages app	1
23	android	2	3	How do you enter the recipient's phone number or contact into the "To" field when composing a new message on Android?	a) By speaking their name out loud	b) By typing their phone number or name into the "To" field	c) By selecting their name from a list of suggested contacts	d) By tapping the microphone icon and dictating their name or phone number	2
24	android	2	4	What do you need to do after composing a message on Android?	a) Tap the Send button	b) Tap the Call button	c) Tap the End Call button	d) Tap the Delete button	1
25	android	3	1	How do you open the Settings app on Android?	a) By tapping the WiFi app icon	b) By tapping the Phone app icon	c) By tapping the Contacts app icon	d) By tapping the Settings app icon	4
26	android	3	2	2.Where do you go in the Settings app on Android to connect to a WiFi network?	a) Mobile data	b) Bluetooth	c) WiFi	d) VPN	3
27	android	3	3	How do you connect to a WiFi network on Android?	a) By selecting the network from a list of suggested networks	b) By tapping the Connect button	c) By entering the network password if necessary	d) By doing all of the above	4
28	android	3	4	What do you need to do after choosing a network from the list on Android?	a) Wait for the connection to be established automatically	b) Enter the network password if necessary	c) Disconnect from the current network	d) None of the above	2
29	android	4	1	How do you open the Contacts app on Android?	a) By tapping the WiFi app icon	b)By tapping the Phone app icon	c) By tapping the Contacts app icon	d) By tapping the Settings app icon	3
30	android	4	2	How do you add and save a contact on an Android device?	a) Open the Contacts app, click "add" (usually a plus sign , enter the contact's details (at least person's name and phone number , and tap "save"	b) Open the Contacts app, click "edit" (usually a pencil icon , make changes to the contact's details, and tap "save"	c) Open the Contacts app, select the contact you want to delete, click the "delete" button (usually a trash can icon , and confirm deletion	d) Open the Contacts app, search for the contact you want to open, and tap on the contact's name to view their details	1
31	android	4	3	How do you edit an existing contact on Android?	a) By tapping the "Edit" button within the Contacts app	b)By tapping the Call button within the Phone app	c ) By tapping the Send button within the Messages app	d) By tapping the Home button on the device	1
32	android	4	4	How do you delete an existing contact on Android?	a) By tapping the "Delete" button within the Contacts app	b) By tapping the Call button within the Phone app	c) By tapping the Send button within the Messages app	d) By tapping the Home button on the device	1
33	windows	1	1	What is the Start Menu?	a) A list of all installed programs and applications	b) A tool for navigating to files and programs	c) A place to store files and folders	d) A game installed on Windows	2
34	windows	1	2	What is the Taskbar?	a) A bar of chocolate you eat while using your computer	b) A tool for organizing files and folders	c) A list of currently open programs	d) A way to control your computer with your voice	3
35	windows	1	3	How do you navigate to your files?	a) By clicking on the Start Menu and selecting "Files"	b) By using the search function in the Taskbar	c) By navigating to the Desktop area	d)By opening the File Explorer	4
36	windows	1	4	What is a folder?	a)A type of file that contains text	b) A storage location for files and other folders	c) A program for creating graphics	d) A type of virus that infects your computer	2
37	windows	2	1	How do you create a folder?	a) Right-click on the Desktop and select "New Folder"	b) Click on the Start Menu and select "New Folder"	c) Open the File Explorer and select "New Folder"	d) Use the search function to create a new folder	3
38	windows	2	2	How do you copy and move files?	a) By dragging and dropping them to the desired location	b) By using the search function to copy and move files	c) By using the Taskbar to copy and move files	d) By selecting the files and clicking on "Copy" or "Move"	1
39	windows	2	3	What is the file search function used for?	a) To delete files from your computer	b) To create new files and folders	c) To find specific files on your computer	d)To play games on your computer	3
40	windows	2	4	What is the shortcut key to create a new folder?	a) Ctrl + N	b) Ctrl + C	c) Ctrl + V	d) Ctrl + F	1
41	windows	3	1	What is WiFi?	a) A type of virus that infects your	b) A technology that allows devices to connect to the internet wirelessly	c) A program for creating graphics	d) A way to control your computer with your voice	2
42	windows	3	2	How do you connect to WiFi?	a) By clicking on the Start Menu and selecting "Connect to WiFi"	b) By using the Taskbar to connect to WiFi	c) By navigating to the WiFi settings in the Control Panel	d) By selecting the WiFi network you want to connect to and entering the password	4
43	windows	3	3	What is an email?	a) A way to communicate with friends and family	b) A virus that infects your computer	c) A type of software that allows you to create documents	d) A program for creating graphics	1
44	windows	3	4	What are some common settings you can adjust on your computer related to WiFi?	a) Screen resolution and font size	b) Background color and theme	c) WiFi network name and password	d) Mouse speed and click sensitivity	3
45	windows	3	1	What is the purpose of a search engine and how do you use it?	a) To find information on the internet; type keywords into the search bar and press enter	b) To change the appearance of your internet browser; navigate to the settings menu	c) To send emails to friends and family; click on the mail icon	d) To create graphics and images; use the drawing tools	1
46	windows	3	2	What is a favorite and how do you make one?	a) A saved website link for quick access; click on the star icon next to the address bar	b) A type of search engine; type in the name of the website in the search bar	c) A way to customize your homepage; use the settings menu	d) A type of virus that infects your computer	1
47	windows	3	3	How do you customize your homepage?	a) By navigating to the settings menu and selecting "Customize Homepage"	b) By creating a new account with a different homepage	c) By using a different internet browser	d)By selecting a different background image or theme	4
48	windows	3	4	How do you refresh a page and open multiple tabs?	a) Click on the refresh icon or press F5; right-click on a link and select "Open in new tab"	b) Navigate to the settings menu and select "Refresh Page" or "Open Multiple Tabs"	c) Press the backspace key or use the scroll wheel on your mouse; press the tab key multiple times	d) None of the above	1
49	MacOs	1	1	What is the first step to navigate to Finder from Dock?	a) Click on the Safari icon	b) Click on the Mail icon	c) Bring the mouse to Dock	d) Bring up Finder window	3
50	MacOs	1	2	What should you do after clicking the Finder icon on the Dock?	a) Click on the Trash folder	b) Click on the Applications folder	c) Click on the Documents folder	d) Click on the Music folder	3
51	MacOs	2	1	What is the first step to connect to WiFi on MacOS?	a) Click on the Finder icon	b) Click on the Mail icon	c) Go to System Preferences	d) Go to Applications folder	3
52	MacOs	2	2	Where do you go in System Preferences to connect to WiFi?	a) Network	b) Sound	c) Security & Privacy	d) Siri	1
53	MacOs	2	3	What do you do after selecting the WiFi network, and how do you know that you are connected to the network on MacOS?	a) Enter the password; the WiFi icon in the menu bar at the top of the screen will indicate a successful connection	b) Check your email; a successful connection will be indicated by a pop-up notification	c) Restart your computer; a successful connection will be indicated by the login screen	d) Install a software update; a successful connection will be indicated by a pop-up notification	1
54	MacOs	2	4	What is another way of connecting to WiFi besides going through System Preferences?	a) Clicking on the Mail icon in the Dock	b) Clicking on the Finder icon in the Dock	c) Clicking on the Siri icon in the menu bar at the top of the screen	d) Clicking on the WiFi icon in the menu bar at the top of the screen	4
55	MacOs	3	1	How do you access the search function on MacOS?	a) Click on the Finder icon	b) Click on the Safari icon	c) Click on the Mail icon	d) Click on the magnifying glass icon	4
56	MacOs	3	2	How do you open the Spotlight search bar in MacOS?	a) Click the Safari icon in the Dock	b) Click the Finder icon in the Dock	c) Press the Command and Space bar together	d) Press the Option and Space keys together	1
57	MacOs	3	3	What do you type in the Spotlight search bar to open the Safari browser, and how do you access it?	a) "Safari" and click on the application	b) "Google" and click on the browser	c) "Firefox" and click on the browser	d) "Chrome" and click on the application	1
58	MacOs	3	4	What is the purpose of the search function on MacOS?	a) To play music	b) To browse the internet	c) To help you quickly find apps, documents, emails, and other items on your Mac	d) To send emails	3
59	MacOs	4	1	What are two ways to open Safari on a Mac?	a) Click on the Safari icon in the Dock, or open iTunes and search for Safari	b) Use Spotlight Search to find and open Safari, or open Terminal and type "open Safari"	c) Go to the Applications folder and double-click on Safari, or open the Calculator app and click on the Safari icon	d) Click on the Mail icon to open Safari, or open the Contacts app and click on the Safari icon	1
60	MacOs	4	2	How do you type in a website URL in Safari?	a) Click on the address bar and type in the URL	b) Click on the search bar and type in the URL	c) Click on the bookmarks bar and select the URL	d) None of the above	1
61	MacOs	4	3	What should you type in the address bar to navigate to Google?	a) Google	b) Google.com	c) www.Google.com	d) b and c	4
62	MacOs	4	4	How do you refresh the page in Safari?	a) Click on the refresh button in the address bar	b) Press Command + R	c) Click X	d) a and b	4
\.


--
-- Data for Name: steps; Type: TABLE DATA; Schema: public; Owner: postgres
--

COPY public.steps (lesson_id, step_order, widget_type, x_coord, y_coord, step_text, device_type) FROM stdin;
1	1	hint	0	0	Welcome to Windows module of Mouse Mastery. In this section, you will learn how to navigate the settings, create and save files, and access the internet on your computer.	\N
1	1	hint	0	0	Welcome to Windows module of Mouse Mastery. In this section, you will learn how to navigate the settings, create and save files, and access the internet on your computer.	\N
2	1	hint	0	0	The Start Menu is a button that looks like the Windows logo. It has all your apps, settings, and files.	\N
3	1	hint	0	0	You should see a menu with different options. Click the "Settings" button.	\N
3	2	hint	0	0	Select "Display". This menu allows you to change the settings on your computer. Select "Brightness and Colors".	\N
3	3	hint	0	0	Adjust the brightness by moving the bar across. Try out the other settings on the menu.	\N
3	4	hint	0	0	In this exercise, we learned about the Start Menu on Windows. It's a button with the Windows logo where we can find our apps, settings, and files. We clicked on the Start Menu, then the "Settings" button, and adjusted the brightness and colors of our computer. We also explored other settings in the menu.	\N
1	1	hint	0	0	The Desktop is the main screen that you see when you turn on your computer. You can also right-click on the desktop to access different settings.	windows
1	2	hint	0	0	Right click on your desktop.	windows
1	3	hint	0	0	You can arrange your desktop just like you would a physical desktop. Select "New" and then "Folder" to create a new folder on the desktop. Type a name for the folder and press Enter. You have just created a folder and saved it on your desktop.	windows
1	4	hint	0	0	In this exercise, we explored the Desktop on our Windows computer. The Desktop is the main screen that we see when we start our computer. We learned that we can right-click on the desktop to access different settings. We created a folder and saved it on our desktop.	windows
2	1	hint	0	0	The Taskbar is located at the bottom of your screen. It is a long bar that has icons for programs that are open or have been pinned so you can access them quicker.	windows
2	2	hint	0	0	Find a program that is currently open on Taskbar and click on it. The program will open and show up on the screen. You can start using the program immediately.	windows
2	3	hint	0	0	Look at the pictures on the Taskbar and the words on the Desktop. See how the words on the Desktop tell you the names of the programs.	windows
2	4	hint	0	0	On the Taskbar click on the same icon for the program you just opened. It will disappear. Click it again and it will re-appear. This is known as minimize or maximize.	windows
2	5	hint	0	0	In this exercise we learned about the Taskbar in Windows. The Taskbar is a long bar located at the bottom of the screen that has icons for open or pinned programs. We reopened a program that was open and it re-appeared on the screen to allow us to use it. We learned the Taskbar uses pictures for icons while the Desktop provides the name and pictures of icons.	windows
3	1	hint	0	0	File Explorer is how you find and open files. It is like a filing cabinet where you can find and open different types of files. It is a folder icon on the Taskbar.	windows
3	2	hint	0	0	Click on your "File Explorer" folder icon. A window will open up showing different files and folders on your computer. Double-click on the "Documents" folder to open it.	windows
3	3	hint	0	0	You may find documents, spreadsheets, or presentations. Try opening one of the files by double-clicking on it.	windows
3	4	hint	0	0	Try navigating to other folders like "Pictures" or "Music" to see what files are stored there.	windows
3	5	hint	0	0	In this exercise, you learned about File Explorer, which is like a filing cabinet for your computer files. File Explorer makes it easy to find and open your files on the computer. By clicking on the folder icon on the Taskbar, you opened a window with different files and folders. You explored the Documents folder and practiced opening files by double-clicking on them. You can also check out other folders like Pictures or Music to see what files are there.	windows
4	1	hint	0	0	In Windows, a "setting" is a way to change how your computer works. For example, you can change the color of your desktop background or adjust the volume of your speakers.	windows
4	2	hint	0	0	Click on the Start Menu (the button with the Windows logo in the bottom-left corner of your screen) and then click on the "Settings" icon.	windows
4	3	hint	0	0	Look for the "Personalization" option and click on it.	windows
4	4	hint	0	0	Choose the "Background" tab. Youll see various options to change your desktop background. Select the "Solid color" option.	windows
4	5	hint	0	0	Select a desired color. It will be applied as your new desktop background color.	windows
4	6	hint	0	0	In this exercise, you learned that Settings gives you control over your computers functionality and customization. You accessed the settings by clicking on the Start Menu and then selecting the "Settings" icon. From there, you explored different options, such as changing the desktop background color.	windows
5	1	hint	0	0	In Windows, folders are used to organize files, just like physical folders. To create a new folder, right-click on your desktop, choose "New," then select "Folder."	windows
5	2	hint	0	0	From the right-click menu, select the "Folder" option.	windows
5	3	hint	0	0	You will see a new folder icon appear. Give your folder a name.	windows
5	4	hint	0	0	You have successfully created a new folder on your computer.	windows
5	5	hint	0	0	In this exercise we learned In Windows, folders are used to organize files, just like physical folders. To create a new folder, right-click on your desktop, choose "New," then select "Folder." Give the folder a name and you have successfully organized your files by creating a new folder on your computer.	windows
1	1	hint	0	0	A very useful shortcut to learn is Cut, Copy, Paste. To "cut" means you are moving an item from one place to another. It's like picking up the item and placing it in a different location. To "copy" means you are making a duplicate of it. It's like creating a photocopy, so you have the original in its original location and a duplicate in another location. "Paste" is used to place the item you cut or copied into a new location. It's like pasting the item onto a new surface.	windows
1	1	hint	0	0	Go to your "Desktop". Right-click on the folder you created when you were learning about folders and choose "Cut".	windows
1	2	hint	0	0	Click the "Start Menu" and double click on "Documents".	windows
1	3	hint	0	0	While on the "Documents" menu, Right-click and select "Paste". The folder should now be moved from the desktop to the "My Documents" folder.	windows
3	1	hint	0	0	Welcome to Wi-Fi and internet. Wi-Fi is a way to connect your computer or device to the internet without any cables. It's a wireless way that lets you browse the internet and do other things online.	windows
3	1	hint	0	0	To connect to Wi-Fi, you first need to make sure your device has Wi-Fi turned on. Click on the Wi-Fi icon on the bottom right corner of your taskbar.	windows
3	2	hint	0	0	Click on the network you want to connect to and enter the password if necessary. This will depend on your internet provider.	windows
3	3	hint	0	0	Once you're connected, you should see a signal strength icon on your screen. Hover your cursor over the signal icon. This will confirm the network you are on and connection strength. You are now ready to go on the internet.	windows
3	4	hint	0	0	Click on the internet browser for your device. This may be Google Chrome, Microsoft Edge, or your internet provider's icon. You are now on the internet.	windows
3	1	hint	0	0	Your home page is the first page you see when you open your web browser. It's like your own personal starting point for the internet. You can customize your home page to show your favorite websites, news feeds, and other useful information.	windows
3	1	hint	0	0	Look for the three dots or lines in the top-right corner.	windows
1	1	hint	0	0	A very useful shortcut to learn is Cut, Copy, Paste...	windows
1	1	hint	0	0	Go to your "Desktop". Right-click on the folder...	windows
1	2	hint	0	0	Click the "Start Menu" and double click on "Documents".	windows
1	3	hint	0	0	While on the "Documents" menu, Right-click and select "Paste".	windows
3	1	hint	0	0	Welcome to Wi-Fi and internet. Wi-Fi is a way to connect...	windows
3	1	hint	0	0	To connect to Wi-Fi, you first need to make sure your device...	windows
3	2	hint	0	0	Click on the network you want to connect to and enter the password...	windows
3	3	hint	0	0	Once you're connected, you should see a signal strength icon...	windows
3	4	hint	0	0	Click on the internet browser for your device...	windows
3	1	hint	0	0	Your home page is the first page you see when you open your web browser...	windows
3	1	hint	0	0	Look for the three dots or lines in the top-right corner.	windows
3	2	hint	0	0	Click on "Settings" and select "Default Browser". This may also be listed under "Home Page" or "Startup Page".	windows
3	3	hint	0	0	Enter the web address of your favorite website or type in a search engine like Google. Save the changes and close the settings. You have now changed your default home page.	windows
4	1	hint	0	0	Email is a way to send a letter, but instead of using paper and envelopes, you use your computer or phone. The recipient will receive your message in their email inbox, and they can read and reply to it just like a regular letter.	windows
4	1	hint	0	0	Open your email application or website. Examples include Microsoft Outlook, Gmail, or Yahoo Mail.	windows
4	2	hint	0	0	Click on "Compose" or the button that allows you to create a new email.	windows
4	3	hint	0	0	Enter the recipient email address in the "To" field.	windows
4	4	hint	0	0	Write your message in the large text box provided. You can use the formatting options to change the font, add attachments, or include links.	windows
4	5	hint	0	0	Click "Send" to send your email. The recipient will receive it in their inbox.	windows
4	1	hint	0	0	To send an email with an attachment, you will need to have the file saved on your computer. This could be a document, a photo, a video, or any other type of file.	windows
4	1	hint	0	0	Open your email application or website and click on "Compose" or the button that allows you to create a new email.	windows
4	2	hint	0	0	Enter the recipient email address in the "To" field.	windows
4	3	hint	0	0	Write your message in the large text box provided. You can use the formatting options to change the font and include links.	windows
4	4	hint	0	0	Look for an icon or button that allows you to attach a file. This is usually represented by a paperclip symbol.	windows
4	5	hint	0	0	Click on the icon or button to browse for the file you want to attach. Once you have selected the file, click "Open" or a similar button to attach it to your email.	windows
4	6	hint	0	0	Click "Send" to send your email with the attachment. The recipient will receive the email with the attached file.	windows
5	1	hint	0	0	Printing is a way to make a physical copy of a document or image from your computer. To print, you will need a printer connected to your computer and paper loaded into the printer.	windows
5	1	hint	0	0	Open the document or image you want to print.	windows
5	2	hint	0	0	Click on the "File" menu in the top-left corner of the application.	windows
5	3	hint	0	0	From the dropdown menu, select "Print" or use the keyboard shortcut Ctrl+P.	windows
5	4	hint	0	0	A print dialog box will appear. Make sure your printer is selected and adjust any print settings you need, such as the number of copies or the page range to print.	windows
5	5	hint	0	0	Click "Print" to start the printing process. Your document or image will be sent to the printer and a physical copy will be printed.	windows
1	1	hint	0	0	Welcome to the "Making Phone Call" module of Mouse Mastery, where you will learn how to use your iOS device to make phone calls. This module is designed for individuals who are new to using an iOS device. By the end of this module, you will be able to open the Phone app, dial a number, make a call, and end a call.	iOS
1	2	hint	0	0	To get started, locate the Phone app on your iOS device. You can usually find it on your home screen, represented by a green phone icon. Tap the Phone app icon to open it. The main features of the Phone app include the keypad, contacts, and recent calls.	iOS
1	3	hint	0	0	To dial a number, use the keypad within the Phone app to enter a phone number manually. Alternatively, you can use the address book to select a contact. If you need to add an area code or use a pause to dial extensions, you can do so using the keypad.	iOS
1	4	hint	0	0	To initiate a call, tap the green phone icon within the Phone app. This will take you to the dialing screen, where you will see the phone number you just entered. Once the call is connected, you will see the call status screen, which shows the duration of the call and other details. During the conversation, you can adjust the volume or mute the call using the on-screen controls.	iOS
1	5	hint	0	0	To end a call, tap the red phone icon within the active call screen. Alternatively, you can use the face down phone icon to end the call when the phone is placed on a flat surface. If you want to use the speaker or headphones to end the call during the conversation, you can do so using the on-screen controls.	iOS
1	6	hint	0	0	To recap, in this module you learned how to use your iOS device to make phone calls. You learned how to open the Phone app, dial a number, make a call, and end a call. You also learned some tips and tricks for adjusting the volume, muting the call, and using the speaker or headphones. We encourage you to practice making phone calls on your iOS device to build your confidence and improve your skills.	iOS
2	1	hint	0	0	Welcome to the "Writing Texts" module of Mouse Mastery, where you will learn how to use your iOS device to send text messages. This module is designed for non-tech-savvy individuals who are new to using an iOS device. By the end of this module, you will be able to open the Messages app, choose a contact or type in a phone number, compose a message, and send the message.	iOS
2	2	hint	0	0	To get started, locate the Messages app on your iOS device. You can usually find it on your home screen, represented by a green speech bubble icon. Tap the Messages app icon to open it. The main features of the Messages app include the conversations, the compose button, and the keyboard.	iOS
2	3	hint	0	0	To choose a contact, tap the compose button within the Messages app. This will take you to the New Message screen, where you can see the "To:" field. You can select a contact from the list of suggested contacts, search for a contact using the search bar, or manually type in a phone number in the "To:" field.	iOS
2	4	hint	0	0	Once you have selected a contact or typed in a phone number, you can compose your message. Tap the text box and use the keyboard to enter your message. You can also use emojis or add attachments, such as photos or videos. If you make a mistake while typing, you can use the backspace key or shake your device to undo the typing.	iOS
2	5	hint	0	0	To send the message, tap the send button within the text box. This will send the message to the selected contact or phone number. Once the message is sent, you will see a confirmation that it has been delivered.	iOS
2	6	hint	0	0	To recap, in this module you learned how to use your iOS device to send text messages. You learned how to open the Messages app, choose a contact or type in a phone number, compose a message, and send the message. You also learned some tips and tricks for using the keyboard, emojis, and attachments. We encourage you to practice sending text messages on your iOS device to build your confidence and improve your skills.	iOS
3	1	hint	0	0	In this module, you will learn how to connect your iOS device to a WiFi network. Connecting to WiFi is essential for browsing the internet, streaming videos, and downloading apps on your device. By the end of this module, you will be able to connect to any available WiFi network on your iOS device.	iOS
3	2	hint	0	0	Go to your home screen and locate the Settings app, which is represented by a gear icon. Tap on the app to open it.	iOS
3	3	hint	0	0	Once in the Settings app, scroll down until you see the Wi-Fi option. Tap on the Wi-Fi option to open it.	iOS
3	4	hint	0	0	Once in the Wi-Fi menu, a list of available networks will appear. Tap on the name of the network you wish to connect to.	iOS
3	5	hint	0	0	If the network is secured with a password, a prompt will appear asking for the password. Type in the password for the network and tap the "Join" button. Your device will then attempt to connect to the network. Once connected, a checkmark will appear next to the network name.	iOS
3	6	hint	0	0	To recap, in this module you learned how to connect your iOS device to a WiFi network. You located the Settings app on your home screen, accessed the Wi-Fi tab, selected a network from the list, entered the password (if required), and connected to the network. This allows you to browse the internet, stream videos, and download apps on your device. Practice connecting to different WiFi networks to become more proficient in this process.	iOS
4	1	hint	0	0	In this module, you will learn how to use the Contacts app on your iOS device to save and manage your contacts. The Contacts app allows you to store information such as phone numbers, email addresses, and physical addresses for the people you know. By the end of this module, you will be able to create new contacts and manage existing ones with ease.	iOS
4	2	hint	0	0	Go to your home screen and locate the Contacts app, which is represented by a person icon. Tap on the app to open it.	iOS
4	3	hint	0	0	Once in the Contacts app, tap on the plus sign icon in the top-right corner of the screen. This will open a new contact form.	iOS
4	4	hint	0	0	In the contact form, you can enter the contact name, phone number, email address, physical address, and more. Tap on each section to fill out the details for the contact.	iOS
4	5	hint	0	0	Once you have entered all the necessary information, tap on the "Done" button in the top-right corner of the screen. This will save the contact to your device.	iOS
4	6	hint	0	0	To recap, in this module you learned how to use the Contacts app on your iOS device to save and manage your contacts. You located the Contacts app on your home screen, opened it, and used the add button to create a new contact. Within the contact form, you entered details such as the contact name, phone number, email address, and physical address. Finally, you saved the contact by tapping the "Done" button. By mastering these steps, you can easily create and manage contacts on your iOS device, keeping your important contact information organized and accessible. Practice creating and editing contacts to enhance your proficiency with the Contacts app.	iOS
1	1	hint	0	0	Welcome to Windows module of Mouse Mastery. In this section, you will learn how to navigate the settings, create and save files, and access the internet.	Windows
1	1	hint	0	0	Welcome to Windows module of Mouse Mastery. In this section, you will learn how to navigate the settings, create and save files, and access the internet.	\N
\.


--
-- Name: content_id_seq; Type: SEQUENCE SET; Schema: public; Owner: postgres
--

SELECT pg_catalog.setval('public.content_id_seq', 1, false);


--
-- Name: quiz_id_seq; Type: SEQUENCE SET; Schema: public; Owner: postgres
--

SELECT pg_catalog.setval('public.quiz_id_seq', 62, true);


--
-- Name: content content_pkey; Type: CONSTRAINT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public.content
    ADD CONSTRAINT content_pkey PRIMARY KEY (id);


--
-- Name: lessons lessons_pkey; Type: CONSTRAINT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public.lessons
    ADD CONSTRAINT lessons_pkey PRIMARY KEY (id);


--
-- Name: quiz quiz_pkey; Type: CONSTRAINT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public.quiz
    ADD CONSTRAINT quiz_pkey PRIMARY KEY (id);


--
-- Name: steps fk_lesson; Type: FK CONSTRAINT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public.steps
    ADD CONSTRAINT fk_lesson FOREIGN KEY (lesson_id) REFERENCES public.lessons(id);


--
-- Name: steps steps_lesson_id_fkey; Type: FK CONSTRAINT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public.steps
    ADD CONSTRAINT steps_lesson_id_fkey FOREIGN KEY (lesson_id) REFERENCES public.lessons(id);


--
-- PostgreSQL database dump complete
--

