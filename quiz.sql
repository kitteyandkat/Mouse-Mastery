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
-- Name: quiz id; Type: DEFAULT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public.quiz ALTER COLUMN id SET DEFAULT nextval('public.quiz_id_seq'::regclass);


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
-- Name: quiz_id_seq; Type: SEQUENCE SET; Schema: public; Owner: postgres
--

SELECT pg_catalog.setval('public.quiz_id_seq', 62, true);


--
-- Name: quiz quiz_pkey; Type: CONSTRAINT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public.quiz
    ADD CONSTRAINT quiz_pkey PRIMARY KEY (id);


--
-- PostgreSQL database dump complete
--

