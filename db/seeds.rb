# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the rails db:seed command (or created alongside the database with db:setup).
#
# Examples:
#
#   movies = Movie.create([{ name: 'Star Wars' }, { name: 'Lord of the Rings' }])
#   Character.create(name: 'Luke', movie: movies.first)


###########################################################################
#Demo Accounts
skywalker = User.create(username: "Skywalker", email: "luke@skywalker.com", password: "password")
organa = User.create(username: "Organa", email: "leia@organa.com", password: "password")
solo = User.create(username: "Solo", email: "han@solo.com", password: "password")
antilles = User.create(username: "Antilles", email: "wedge@antilles.com", password: "password")
jade = User.create(username: "Jade", email: "mara@jade.com", password: "password")
horn = User.create(username: "Horn", email: "corran@horn.com", password: "password")
katarn = User.create(username: "Katarn", email: "kyle@katarn.com", password: "password")
kenobi = User.create(username: "Kenobi", email: "obi@kenobi.com", password: "password")
mothma = User.create(username: "Mothma", email: "mon@mothma.com", password: "password")
ackbar = User.create(username: "Ackbar", email: "admiral@ackbar.com", password: "password")
feylya = User.create(username: "Feylya", email: "borsk@feylya.com", password: "password")
isaard = User.create(username: "Isaard", email: "ysanne@isaard.com", password: "password")
isolder = User.create(username: "Isolder", email: "prince@isolder.com", password: "password")
janson = User.create(username: "Janson", email: "wes@janson.com", password: "password")
shrike = User.create(username: "Shrike", email: "garris@shrike.com", password: "password")
salsolo = User.create(username: "Sal-Solo", email: "thrackan@sal-solo.com", password: "password")
tharen = User.create(username: "Tharen", email: "bria@tharen.com", password: "password")
###########################################################################


# 500.times do
#   Question.create(title: Faker::Lorem.paragraph(1, true, 5), body: Faker::Lorem.paragraph(5, true, 4), author_id: (1..117).to_a.sample)
# end
#




Question.create(title: "Localstorage scripts conflict", body: "i have 2 localstorage scripts. One saves input ranges positions and values, the second saves checkbox statuses. As soon i use these scripts together, checkbox will be retained but ranges will be reset. Is there a way to make them coexist? Thanks. $(document).ready(function() {
            $('#mastereeset').change(saveSettings);
            $('#scenenew').change(saveSettings);
            $('#launch').change(saveSettings);

            function saveSettings() {
                localStorage.mastereeset = $('#mastereeset').val();
                localStorage.scenenew = $('#scenenew').val();
                localStorage.launch = $('#launch').val();
        }
                loadSettings();
            });

        function loadSettings() {
            $('#mastereeset').val(localStorage.mastereeset);
            $('#scenenew').val(localStorage.scenenew);
            $('#launch').val(localStorage.launch);
        }", author_id: (1..17).to_a.sample)
Question.create(title: "Most efficient way to generate many figures with matplotlib", body: "I need to generate and save thousands of scatter plots which are essentially the same except the only thing that changes is the \"y\" variable. What is the fastest way to do this?

I thought about creating the Figure and Axes instance and simply clearing then between plots like this:

import matplotlib.pyplot as plt
import numpy as np

data = np.random.random((100, 1000))
x = list(range(100))

fig = plt.figure()
ax = fig.add_subplot(111)

for i in range(data.shape[1]):
    ax.scatter(x, data[:,i])
    fig.savefig(\"%d.png\" % i, dpi=100)
    ax.cla()", author_id: (1..17).to_a.sample)
Question.create(title: "I have a div that been toggled using jquery but the background color i defined for this div is only visible when i click", body: "Just starting with html and JQuery but the title is quite self explanatory. I have 3 images and when i click in one of them it toggles a div that i set with a different background-color, but this color is only visible when i click the images", author_id: (1..17).to_a.sample)
Question.create(title: "Find array/variable after getting Html5 data attribute", body: "var myArray = [{a: 50, b: 70}, {a: 80, b: 90}],
    mySecondArray = [{a: 30, b: 20}, {a: 80, b: 40}];

$('.button').click(function() {
    var newArray = $(this).data('value'); // this will be a string depending on the value of any .button i clicked on <div data-value='myArray'></div>

    doSomething(newArray);
};", author_id: (1..17).to_a.sample)
Question.create(title: "How to dynamically add/remove HTML attributes in asp.net", body: "I want to either add/remove the onclick attribute from my repeater based on conditions. How can i access each individual one in the databound event to remove or add that attribute?", author_id: (1..17).to_a.sample)
Question.create(title: "Bootstrap 3 form-horizontal with two-line label", body: "The default display is that the input and the first line of the label have the same baseline but I want to align the input with the vertical center of the label.

How can I do this ?

Thanks.", author_id: (1..17).to_a.sample)
Question.create(title: "Using Log4j2 in static method", body: "Problem: Can not resolve method getLogger

Questoion: How use log4j2 in static method?", author_id: (1..17).to_a.sample)
Question.create(title: "Directory Chooser in HTML and JavaScript", body: "I want to have an input field with browse button that lets users select/paste the folder path in their local machine and have the folder path automatically populate in the text field and should be able to make a post ajax call on click of submit button.", author_id: (1..17).to_a.sample)
Question.create(title: "sqlalchemy how to use metadata to build query", body: "I can get my column names by doing

for c in models.User.__table__.column:
 c.name
How can I make queries based on the following:

column='id'
for c in models.User.__table__.column:
 a=models.User.query.filter_by(column='1')
Ideally I'd like to throw c.name in place of column and be able to pull any data in any column without having to specify the column name in the filter_by statement.", author_id: (1..17).to_a.sample)
Question.create(title: "Using Halide ahead-of-time (AOT) with Metal on iOS", body: "I'm trying to use Metal as the target for my ahead-of-time (AOT) Halide pipeline for use on iOS.

I've successfully created a Halide generator that generates a static binary using Metal. I can link and call this binary in my iOS app.

However, when I pass an Buffer<uint8_t> input_ to the function, the data in the Buffer always seems to be zero on the GPU side. Note that this only happens when running on the GPU on iOS.", author_id: (1..17).to_a.sample)
Question.create(title: "Hiding dynamically created DIV inside datatable", body: "I did try this:

$('.user').hide();
And this:

$(document).on(\"pageload\", \".user\",function(){
    $(this).hide();
});
But nothing. Not sure if there is another way of hiding it on load, can't use a click or such.", author_id: (1..17).to_a.sample)
Question.create(title: "AES Encryption .net to swift", body: "We are able to Encrypt and Decrypt data in Swift but Encrypted data of .Net code is not getting decrypted in Swift.Please let me know if anything wrong with the code.We tried decrypting Encrypted data of swift in .net its working fine but we are not able to decrypt the .net data. please help us with that. I have tried almost every solution available.", author_id: (1..17).to_a.sample)
Question.create(title: "Flask-SocketIO + Nginx: 502 connecting refused", body: "This error appears only when i connect from android application using mobile internet, but via wifi all works.", author_id: (1..17).to_a.sample)
Question.create(title: "ngTable with paganation", body: "Following is the code from Fabric Docs. How can I assign setCallback() into ImageView because I need to do authentication after ImageView is clicked (not TwitterButton):

import com.twitter.sdk.android.core.Callback;
import com.twitter.sdk.android.core.Result;
import com.twitter.sdk.android.core.TwitterException;
import com.twitter.sdk.android.core.TwitterSession;
import com.twitter.sdk.android.core.identity.TwitterLoginButton;
...

loginButton = (TwitterLoginButton) findViewById(R.id.login_button);
loginButton.setCallback(new Callback<TwitterSession>() {
   @Override
   public void success(Result<TwitterSession> result) {
       // Do something with result, which provides a TwitterSession for making API calls
   }

   @Override
   public void failure(TwitterException exception) {
       // Do something on failure
   }
});", author_id: (1..17).to_a.sample)
Question.create(title: "Is there a concise way to specify an element name with a variable when defining an R vector with c()", body: "Suppose we are defining an R vector V with three elements whose names are \"a\", \"b\", and the value in variable x. Is there a concise way to do it? I.e. in the following, can ?x be replaced with something that extracts the value of x and uses it as the name?

V = c(a=1, b=45, ?x=100)
This would work:

V = setNames(c(1, 45, 100), c(\"a\", \"b\", x))
But it would sure be nice if there were a way to do it without using setNames, keeping the name and data values closedly paired in the definition statement.", author_id: (1..17).to_a.sample)
Question.create(title: "Make logo scroll from top to bottom of the page and increase width", body: "I need to make the logo of a website scroll from top to bottom and increase his width after the user has scroll the viewport height.

The only problem is I want my logo to be well positioned just under the big blue colored screen after the user scroll and start the animation from here.

Here the link to the page : http://tmp.thomasdesnoyers.com/ (beware if you refresh the page, as I add an anchor to the works page, you need to click on the logo to go back to homepage)

Thank you", author_id: (1..17).to_a.sample)
Question.create(title: "UITextField endEditing:YES (force) Not Dismissing Keyboard", body: "I have a Date/Time editor I built and which works more like a traditional desktop Date/Time keyboard based editor (no spinners). It lives in a custom UITableViewCell and consists of a bunch of UITextFields for the different parts of the date and time.

It is presented as one of the cells on a TableViewController shown modally when users are adding a new data record. If they cancel the add operation I need to discard all data, dismiss the controller and if the keyboard was showing dismiss it. I do this by calling this method when the Cancel button is pressed:", author_id: (1..17).to_a.sample)
Question.create(title: "In BigQuery, what is the workaround for _TABLE_SUFFIX to pull the correct schema?", body: "When using StandardSQL with _TABLE_SUFFIX, BigQuery interprets the schema based on the last table saved into the dataset. The result is that if there are more than one kind of table in the dataset, the following query will return NULL values for an incorrect schema:

SELECT
  *
FROM `dataset.*`
WHERE
    _TABLE_SUFFIX LIKE '%some_table_name'
So if I save a table named dataset.different_table and then execute the above query, then the result won't be as expected.

Is there a workaround for this workflow? An alternative to using _TABLE_SUFFIX?", author_id: (1..17).to_a.sample)
Question.create(title: "Check if a device is running Android-Things", body: "Is it possible to perform a runtime check to see if a device is running Android-Things?", author_id: (1..17).to_a.sample)
Question.create(title: "Is there an Elm equivalent of jQuery.offset?", body: "If I want how far my element is from the top of the screen in Elm, how do I do that?

In context, I'm trying to figure out how to tell if an element is out of view in Elm, and according to this, that's the first ingredient I would need to do so.", author_id: (1..17).to_a.sample)
Question.create(title: "pyvenv-3.4 returned non-zero exit status 1", body: "I'm in Kubuntu 14.04 , I want to create a virtualenv with python3.4. I did with python2.7 before in other folder. But when I try:

pyvenv-3.4 venv
I've got:

Error: Command '['/home/fmr/projects/ave/venv/bin/python3.4', '-Im', 'ensurepip', '--upgrade', '--default-pip']' returned non-zero exit status 1", author_id: (1..17).to_a.sample)
Question.create(title: "rest: Is it ok to alter the database on the very first get request of a user (and not anymore afterwards)", body: "I'm working on an API that has a /settings endpoint. Each user can request his current settings with a get request to that settings endpoint and will receive a list of his/her settings. In the backend this is set up with a table in a relational database (table name: Settings) which contains a few columns with the available options and each row corresponds to a setting of a user (and is linked to the user using a foreign key containing the user key).

My situation is as follows: I am not automatically creating a row in the settings table when a new user is created(for reasons not relevant to the question). So when a user asks the api for his/her settings the very first time, a record is created for this user in the Settings table containing all default settings.

The problem: This means that with the very first GET request there is actually a record added to the database in the backend (so the databases are altered with a GET request). This is a violation of the paradigm that GET requests shouldn't alter stuff.", author_id: (1..17).to_a.sample)
Question.create(title: "How to deploy JAR files to existing webapp subdirectory?", body: "Let's say I have a very ordinary web app deployed via mywebapp.war, generated by Maven:

webapps
  |
  |--mywebapp.war
  |--mywebapp
       |
       |--images
       |--js
       |--jsp
       |--jardeploy
       |--META-INF
       |--styles
       |--WEB-INF
Now I would like to deploy myjarfile1.jar and myjarfile2.jar (or more) in webapps/mywebapp/jardeploy. They are artifacts of another Maven project, not the one that makes the war. They are also not jars that mywebapp uses, which would be under WEB-INF/lib, but rather downloadable jars built separately and not part of the mywebapp source code.", author_id: (1..17).to_a.sample)
Question.create(title: "Integrated Terminal Setting VS Code and iTerm returns zsh", body: "I'm trying to use iterm as my focus terminal inside vscode. I've setup \"terminal.external.osxExec\": \"iTerm.app\", but I get zsh instead of iTerm. ", author_id: (1..17).to_a.sample)
Question.create(title: "How to create dll of Lua Module", body: "I'm trying to write an external Lua module.

I work on Windows 8.1 and I use gcc as compiler.

My requirement is to build/compile everything all by myself without using pre-compiled files available online.

First of all, I build C source code of Lua 5.2.4 as follow:

gcc -c *.c
ren lua.o lua.obj
ren luac.o luac.obj
ar rcs luaX.X.X.lib *.o
gcc -shared -o luaX.X.X.dll *.o
gcc lua.c luaX.X.X.lib -o luaX.X.X.exe
gcc luac.c luaX.X.X.lib -o luacX.X.X.exe
del *.o *.obj
where X.X.X is the source code revision.", author_id: (1..17).to_a.sample)
Question.create(title: "React and typescript with webpack typing issue", body: "I'm trying to create an asyncComponent HOC with TypeScript, but can't quite get the types right.

Essentially, this works in JS with webpack...

const Auth = asyncComponent(() =>
  require.ensure([], require => require(\"../auth/index\").default, \"auth_async\"),
);
My asyncComponent is a higher order function that does the following...", author_id: (1..17).to_a.sample)
Question.create(title: "dc.js add class to data points in multiple charts based on criteria from first chart", body: "In a multi-chart dc.js/d3.js presentation, I wish to trap user click on a datapoint in the first chart, and:

(1) identify all points in chart 1 with a value within 30 points of the clicked point; -- done
(2) store the indices for these data points; -- done
(3) colorize the stored datapoints in chart1; -- need help
(4) colorize the points at same index locations in charts 2 and 3 -- need help

For example, user clicks on shift 2 on first chart. 140 cars were built on that shift. In chart 1, three shifts are within 30 of that shift's production: 2, 7, 10. I wish to make those 3 data points green, and then also make shifts 2, 7, 10 green in both charts 2 and 3 also. (Also, the original clicked-on datapoint should be red)

I am unsure how to add the greendot class to those three datapoints in the three charts.", author_id: (1..17).to_a.sample)
Question.create(title: "Can not connect to local MySQL server thru Apps Script (JDBC)", body: "Please see edits below, I'm leaving the original question to help others.

I am attempting to connect to a local MySQL server thru Apps Script and JDBC, but I keep getting one of two errors. This code:

function connectTest() {
  var conn = Jdbc.getConnection(\"jdbc:mysql://localhost\", \"root\", \"xxx\");
}
Gives an error of Failed to establish a database connection. Check connection string, username and password.

This code:

function connectTest() {
  var conn = Jdbc.getConnection(\"jdbc:mysql://localhost:3306\", \"xxx\", \"pass\");
}
Gives an error of Invalid argument: url.

I've tried dozens of combinations and can't get it to work. The attempts to log in from Apps Scripts do not show on the access log for MySQL (i.e. if I try to log on locally with the wrong info, I see [Note] Access denied for user 'host'@'localhost' (using password: YES). I've granted the appropriate access rights to root:", author_id: (1..17).to_a.sample)
Question.create(title: "Webpack HMR Throws React syntheticEvent Error", body: "SYSTEM INFO:

OSX 10.12.4 Sierra
Node v7.10.0
npm v4.2.0
BROWSERS TESTED:

Chrome 58.0.3029.110
Safari 10.1
Firefox 53.0
THE PROBLEM:

I have an app running effectively in production that I've cloned and am attempting to update in preparation for building out a sequel. However, I've run into a strange Webpack issue by updating it / React / HMR to more recent builds.", author_id: (1..17).to_a.sample)
Question.create(title: "Can i add new custom tables inside my aspnet database inside asp.net MVC-5 project", body: "now i am not sure how i need to achieve this? as i need to add a foreign key between my custom table \"Asset\" and the \"AspNetUsers\" table which have been created automatically.. so can i add my custom table \"Asset\" inside the automatically generated database, and build the foreign key between the Asset.CreatedBy and AspNetUsers.Id ??

if the answer is Yes then can this relation break in the future if we want to upgrade our aspnet identity version ? as upgrading the identity might result in creating new tables or renaming existing ones etc.. which might break the relation between the Asset table and the AspNetUsers table?
If the answer is No (i should not add custom tables inside the automatically generated database ) then how i can build the foreign key ?? and where i need to add the Asset table in this case??", author_id: (1..17).to_a.sample)
Question.create(title: "How can I share a local storage token across the same domain but a different host?", body: "Project 1: MVC App:

So I have a regular .Net Core MVC application that a user would land on when they navigate to myDomain.com which is hosted on port 3000. Here I am using regular controllers and razor views etc. Within this applicaton the user can login at which point a JWT token would be returned and stored in local storage. They will also be navigated to the user portal (hosted on port 3001). This MVC application will also contain the API controllers for my user portal

Project 2: SPA app (user portal):

The user portal is basically a seperate client SPA project using react that will be hosted on port 3001 having its own seperate node js server and making calls to the MVC project API on port 3000.

So my problem is how can I persist my login token across these two ports?? Is this even possible? Does this architecture even make sense? Any readings you can provide on this topic would be greatly appreciated.", author_id: (1..17).to_a.sample)
Question.create(title: "X11 forwarding with PyCharm and Docker Interpreter", body: "I am developing a project in PyCharm using a Docker interpreter, but I am running into issues when doing most \"interactive\" things. e.g.,

import matplotlib.pyplot as plt
plt.plot([1, 2, 3], [4, 5, 6])
gives

RuntimeError: Invalid DISPLAY variable
I can circumvent this using

import matplotlib
matplotlib.use('agg')", author_id: (1..17).to_a.sample)
Question.create(title: "Special Characters in Basic Authentication username do not work with Chrome but works in IE and Firefox", body: "I have a web server configured with Basic Authentication and LDAP. Usually, I can log in with usernames containing english alphabets for all 3 browsers. However, if the username contains special characters like (example german names like RÈM WÉB), the web server returns a 401 and I get the authentication pop up again i.e. apache fails to validate.

After checking the apache access.log, I could tell that when I login from firefox and chrome, the encoding seems different. Is this encoding decided by the browser or by the web server ? I assume it is browser cause things work fine with firefox. Where can I set this encoding scheme in chrome ?

Also, to confirm it is a browser thing, I can see that the Authorization Header sent is different for the same user in Firefox and Chrome. Clearly the header is not encoded using the same scheme by the browser. Any suggestions ?

More debugging tells that firefox (and also IE) use ISO8859-1 for encoding and chrome is using UTF-8.

I will be ok even if the Apache web server tries multiple times using (if ISO8859-1 returns a 401, it should try again with UTF-8). Either a browser or a web server solution should be ok.", author_id: (1..17).to_a.sample)
Question.create(title: "How to host the Windows Workflow as a Web service(.svc)?", body: "using System;
using System.ServiceModel.Activities;
using System.Activities;
using System.ServiceModel;
using System.Activities.Statements;

namespace DemoWF
{
    public class _25_LeaveRequest
    {
        public WorkflowService GetInstance()
        {
            WorkflowService service;
            Variable<int> empID = new Variable<int> { Name = \"empID\" };
            Variable<int> requestID = new Variable<int> { Name = \"requestID\" };

        Receive receiveLeaveRequest = new Receive
        {
            ServiceContractName = \"ILeaveRequestService\",
            OperationName = \"ApplyLeave\",
            CanCreateInstance = true,
            Content = new ReceiveParametersContent
            {
                Parameters ={
                    {\"empID\",new OutArgument<int>(empID)}
                }
            }
        };

        SendReply replyLeaveRequestID = new SendReply
        {
            Request = receiveLeaveRequest,
            Content = new SendParametersContent
            {
                Parameters ={
                            {\"requestID\",new InArgument<int>(requestID)},
                        },
            },
        };


        Sequence workflow = new Sequence()
        {
            Variables = { empID, requestID },
            Activities = {
                new WriteLine{Text=\"WF service is starting...\"},
                receiveLeaveRequest,
                new WriteLine{
                    Text=new InArgument<string>(aec=> \"Emp ID=\"+empID.Get(aec).ToString())
                },
                new Assign<int>{
                    Value=new InArgument<int>(5),
                    To=new OutArgument<int>(requestID)
                },
                new WriteLine{
                    Text=new InArgument<string>(aec=> \"Request ID=\"+requestID.Get(aec).ToString())
                },
                replyLeaveRequestID
            },
        };

        service = new WorkflowService
        {
            Name = \"AddService\",
            Body = workflow
        };
        return service;
    }
}", author_id: (1..17).to_a.sample)
Question.create(title: "how to align images horizontally centered", body: "On this page, there are some staff photos.

On an iPad in portrait mode, the staff photos are cut off on the right hand side.

I don't mind them being cut off, but I'd like them aligned center, instead of aligned left.

See https://i.imgur.com/onQXs6k.jpg

Note, I want the image dimensions to be the same, just the alignment shifted to the left to become centered, so that faces show in the middle of the image boundaries.

I've tried the following solutions from this question:", author_id: (1..17).to_a.sample)



answers = [
  "This is what you want to undo
This leaves your working tree (the state of your files on disk) unchanged but undoes the commit and leaves the changes you committed unstaged (so they'll appear as \"Changes not staged for commit\" in git status and you'll need to add them again before committing). If you only want to add more changes to the previous commit, or change the commit message1, you could use git reset --soft HEAD~ instead, which is like git reset HEAD~ but leaves your existing changes staged.
Make corrections to working tree files.
git add anything that you want to include in your new commit.
Commit the changes, reusing the old commit message. reset copied the old head to .git/ORIG_HEAD; commit with -c ORIG_HEAD will open an editor, which initially contains the log message from the old commit and allows you to edit it. If you do not need to edit the message, you could use the -C option.",
  "Undoing a commit is a little scary if you don't know how it works. But it's actually amazingly easy if you do understand.

Say you have this, where C is your HEAD and (F) is the state of your files.

   (F)
A-B-C
    ↑
  master
You want to nuke commit C and never see it again. You do this:

git reset --hard HEAD~1
The result is:

 (F)
A-B
  ↑
master
Now B is the HEAD. Because you used --hard, your files are reset to their state at commit B.",
  "Add/remove files to get things the way you want:

git rm classdir
git add sourcedir
Then amend the commit:

git commit --amend
The previous, erroneous commit will be edited to reflect the new index state - in other words, it'll be like you never made the mistake in the first place.

Note that you should only do this if you haven't pushed yet. If you have pushed, then you'll just have to commit a fix normally.",
  "For JSON text:

The MIME media type for JSON text is application/json. The default encoding is UTF-8. (Source: RFC 4627).
For JSONP with callback:

application/javascript
Here are some blog posts that were mentioned in the comments that are relevant.

Why you shouldn't use text/html for JSON
Internet Explorer sometimes has issues with application/json
A rather complete list of Mimetypes and what to use them for",
  "IANA has registered the official MIME Type for JSON as application/json.

When asked about why not text/json, Crockford seems to have said JSON is not really JavaScript nor text and also IANA was more likely to hand out application/* than text/*.

More resources:

Media Types
Request for Comments 4627
bluesmoon: JSON has a type",
  "Of course, the correct MIME media type for JSON is application/json, but it's necessary to realize what type of data is expected in your application.

For example, I use Ext GWT and the server response must go as text/html but contains JSON data.

Client side, Ext GWT form listener

uploadForm.getForm().addListener(new FormListenerAdapter()
{
    @Override
    public void onActionFailed(Form form, int httpStatus, String responseText)
    {
        MessageBox.alert(\"Error\");
    }

    @Override
    public void onActionComplete(Form form, int httpStatus, String responseText)
    {
        MessageBox.alert(\"Success\");
    }
});
In case of using application/json response type, the browser suggests me to save the file.

Server side source code snippet using Spring MVC",
  "As always with these questions, the JLS holds the answer. In this case §15.26.2 Compound Assignment Operators. An extract:

A compound assignment expression of the form E1 op= E2 is equivalent to E1 = (T)((E1) op (E2)), where T is the type of E1, except that E1 is evaluated only once.
An example cited from §15.26.2

[...] the following code is correct:

short x = 3;
x += 4.6;
and results in x having the value 7 because it is equivalent to:

short x = 3;
x = (short)(x + 4.6);
In other words, your assumption is correct.",
  "A likely reason to why the Java compiler adds a typecast is because if you're trying to perform arithmetic on incompatible types, there is no way of performing a typecast of the result using the contracted form. A typecast of the result is generally more accurate than a typecast of the problematic argument. No typecast would make the contraction useless when using incompatible types, as it would always cause the compiler to throw an error out. ",
  "Very good question. The Java Language specification confirms your suggestion.

For example, the following code is correct:

short x = 3;
x += 4.6;
and results in x having the value 7 because it is equivalent to:

short x = 3;
x = (short)(x + 4.6);",
  "The problem here involves type casting.

When you add int and long,

The int object is casted to long & both are added and you get long object.
but long object cannot be implicitly casted to int. So, you have to do that explicitly.
But += is coded in such a way that it does type casting. i=(int)(i+m)",
  "The main difference is that with a = a + b, there is no typecasting going on, and so the compiler gets angry at you for not typecasting. But with a += b, what it's really doing is typecasting b to a type compatible with a. So if you do

int a=5;
long b=10;
a+=b;
System.out.println(a);
What you're really doing is:

int a=5;
long b=10;
a=a+(int)b;
System.out.println(a);",
  "From their source, the method used to return false until it was changed in API 21.

/**
 * Used to determine whether the user making this call is subject to
 * teleportations.
 * @return whether the user making this call is a goat
 */
public boolean isUserAGoat() {
    return false;
}
It looks like the method has no real use for us as developers. Someone has previously stated that it might be an Easter egg.

Edit:

In API 21 the implementation was changed to check if there is an installed app with the package com.coffeestainstudios.goatsimulator",
  "I don't know if this was \"the\" official use case but the following produces a warning in Java (that can further produce compile errors if mixed with return statements, leading to unreachable code):

while (1 == 2) { // note \"if\" is treate differently
    System.out.println(\"Unreachable code\");
}
However this is legal:

while (isUserAGoat()) {
    System.out.println(\"Unreachable but determined at runtime, not at compile time\");
}
So I often find myself writing a silly utility method for the quickest way to dummy out a code block, then in completing debugging find all calls to it, so provided the implementation doesn't change this can be used for that.

JLS points out if (false) does not trigger \"unreachable code\" for the specific reason that this would break support for debug flags i.e. basically this use case (h/t @auselen). (static final boolean DEBUG = false; for instance). I replaced while for if, producing a more obscure use case. I believe you can trip up your IDE, like Eclipse, with this behavior, but this edit is 4 years into the future and I don't have an Eclipse environment to play with.",
  "There's a funny named method/constant/whatever in each version of Android.

The only practical use I ever saw was in the Last Call for Google I/O Contest where they asked what it was for a particular version, to see if contestants read the API diff report for each release. The contest had programming problems too, but generally some trivia that could be graded automatically first to get the number of submissions down to reasonable amounts that would be easier to check.",
  "In the discipline of speech recognition, users are divided into goats and sheeps.

For instance here on page 89.

Sheeps are people for whom speech recognition works exceptionally well, and goats are people for whom it works exceptionally poorly. Only the voice recognizer knows what separates them. People can't predict whose voice will be recognized easily and whose won't. The best policy is to design the interface so it can handle all kinds of voices in all kinds of environments
Maybe, it is planned to mark Android users as goats in future to be able to configure the speech recognition engine for goat's needs. ;-)",
  "In Java 1.7 or later, the standard way to do this is as follows:

import java.util.concurrent.ThreadLocalRandom;

// nextInt is normally exclusive of the top value,
// so add 1 to make it inclusive
int randomNum = ThreadLocalRandom.current().nextInt(min, max + 1);
See the relevant JavaDoc. This approach has the advantage of not needing to explicitly initialize a java.util.Random instance, which can be a source of confusion and error if used inappropriately.

However, conversely there is no way to explicitly set the seed so it can be difficult to reproduce results in situations where that is useful such as testing or saving game states or similar. In those situations, the pre-Java 1.7 technique shown below can be used.

Before Java 1.7, the standard way to do this is as follows:

import java.util.Random;

/**
 * Returns a pseudo-random number between min and max, inclusive.
 * The difference between min and max can be at most
 * <code>Integer.MAX_VALUE - 1</code>.
 *
 * @param min Minimum value
 * @param max Maximum value.  Must be greater than min.
 * @return Integer between min and max, inclusive.
 * @see java.util.Random#nextInt(int)
 */
public static int randInt(int min, int max) {

    // NOTE: This will (intentionally) not run as written so that folks
    // copy-pasting have to think about how to initialize their
    // Random instance.  Initialization of the Random instance is outside
    // the main scope of the question, but some decent options are to have
    // a field that is initialized once and then re-used as needed or to
    // use ThreadLocalRandom (if using at least Java 1.7).
    Random rand;

    // nextInt is normally exclusive of the top value,
    // so add 1 to make it inclusive
    int randomNum = rand.nextInt((max - min) + 1) + min;

    return randomNum;
}
See the relevant JavaDoc. In practice, the java.util.Random class is often preferable to java.lang.Math.random().

In particular, there is no need to reinvent the random integer generation wheel when there is a straightforward API within the standard library to accomplish the task.",
  "Note that this approach is more biased and less efficient than a nextInt approach, https://stackoverflow.com/a/738651/360211

One standard pattern for accomplishing this is:

Min + (int)(Math.random() * ((Max - Min) + 1))
The Java Math library function Math.random() generates a double value in the range [0,1). Notice this range does not include the 1.

In order to get a specific range of values first, you need to multiply by the magnitude of the range of values you want covered.

Math.random() * ( Max - Min )
This returns a value in the range [0,Max-Min), where 'Max-Min' is not included.

For example, if you want [5,10], you need to cover five integer values so you use

Math.random() * 5
This would return a value in the range [0,5), where 5 is not included.

Now you need to shift this range up to the range that you are targeting. You do this by adding the Min value.

",
  "You can edit your second code example to:

Random rn = new Random();
int range = maximum - minimum + 1;
int randomNum =  rn.nextInt(range) + minimum;",
  "With java-8 they introduced the method ints(int randomNumberOrigin, int randomNumberBound) in the Random class.

For example if you want to generate five random integers (or a single one) in the range [0, 10], just do:

Random r = new Random();
int[] fiveRandomNumbers = r.ints(5, 0, 11).toArray();
int randomNumber = r.ints(1, 0, 11).findFirst().getAsInt();
The first parameter indicates just the size of the IntStream generated (which is the overloaded method of the one that produces an unlimited IntStream).",
  "@mpkorstanje This implementation is designed to work with any values of min <= max, even when their difference is equal to or even larger than MAX_VALUE. Running a loop until success is a common pattern in this case, to guarantee uniform distribution (if the underlying source of randomness is uniform). Random.nextInt(int) does it internally when the argument is not a power of 2",
  "Generate a random number for the difference of min and max by using the nextint(n) method and then add min number to the result:

Random rn = new Random();
int result = rn.nextInt(max - min + 1) + min;
System.out.println(result);",
  "Iterate through the entrySet like so:

public static void printMap(Map mp) {
    Iterator it = mp.entrySet().iterator();
    while (it.hasNext()) {
        Map.Entry pair = (Map.Entry)it.next();
        System.out.println(pair.getKey() + \" = \" + pair.getValue());
        it.remove(); // avoids a ConcurrentModificationException
    }
}",
  "Extracted from the reference How to Iterate Over a Map in Java:

There are several ways of iterating over a Map in Java. Let's go over the most common methods and review their advantages and disadvantages. Since all maps in Java implement the Map interface, the following techniques will work for any map implementation (HashMap, TreeMap, LinkedHashMap, Hashtable, etc.)

Method #1: Iterating over entries using a For-Each loop.

This is the most common method and is preferable in most cases. It should be used if you need both map keys and values in the loop.

Map<Integer, Integer> map = new HashMap<Integer, Integer>();
for (Map.Entry<Integer, Integer> entry : map.entrySet()) {
    System.out.println(\"Key = \" + entry.getKey() + \", Value = \" + entry.getValue());
}
Note that the For-Each loop was introduced in Java 5, so this method is working only in newer versions of the language. Also a For-Each loop will throw NullPointerException if you try to iterate over a map that is null, so before iterating you should always check for null references.",
  "Or you can get the list of keys with

Collection<?> keys = map.keySet();
for(Object key: keys){
    System.out.println(\"Key \" + key);
    System.out.println(\"Value \" + map.get(key));
}
If you just want to get all of the values, and aren't concerned with the keys, you can use:

",
  "for (Map.Entry<String, String> item : params.entrySet()) {
  String key = item.getKey();
  String value = item.getValue();
}",
  "Note that this solution does not skip empty tokens, so the following will find 4 items, one of which is empty:

std::vector<std::string> x = split(\"one:two::three\", \':\');",
  "A possible solution using Boost might be:

#include <boost/algorithm/string.hpp>
std::vector<std::string> strs;
boost::split(strs, \"string to split\", boost::is_any_of(\"\t \"));
This approach might be even faster than the stringstream approach. And since this is a generic template function it can be used to split other types of strings (wchar, etc. or UTF-8) using all kinds of delimiters.

See the documentation for details.",
  "#include <vector>
#include <string>
#include <sstream>

using namespace std;

int main()
{
    string str(\"Split me by whitespaces\");
    string buf; // Have a buffer string
    stringstream ss(str); // Insert the string into a stream

    vector<string> tokens; // Create vector to hold our words

    while (ss >> buf)
        tokens.push_back(buf);
}",
  "I usually choose to use std::vector<std::string> types as my second parameter (ContainerT)... but list<> is way faster than vector<> for when direct access is not needed, and you can even create your own string class and use something like std::list<subString> where subString does not do any copies for incredible speed increases.

It's more than double as fast as the fastest tokenize on this page and almost 5 times faster than some others. Also with the perfect parameter types you can eliminate all string and list copies for additional speed increases.

Additionally it does not do the (extremely inefficient) return of result, but rather it passes the tokens as a reference, thus also allowing you to build up tokens using multiple calls if you so wished.

Lastly it allows you to specify whether to trim empty tokens from the results via a last optional parameter.

All it needs is std::string... the rest are optional. It does not use streams or the boost library, but is flexible enough to be able to accept some of these foreign types naturally.",
  "Basically, instead of having your objects creating a dependency or asking a factory object to make one for them, you pass the needed dependencies in to the object externally, and you make it somebody else's problem. This \"someone\" is either an object further up the dependency graph, or a dependency injector (framework) that builds the dependency graph. A dependency as I'm using it here is any other object the current object needs to hold a reference to.

One of the major advantages of dependency injection is that it can make testing lots easier. Suppose you have an object which in its constructor does something like:",
  "The best definition I've found so far is one by James Shore:

\"Dependency Injection\" is a 25-dollar term for a 5-cent concept. [...] Dependency injection means giving an object its instance variables. [...].
There is an article by Martin Fowler that may prove useful, too.

Dependency injection is basically providing the objects that an object needs (its dependencies) instead of having it construct them itself. It's a very useful technique for testing, since it allows dependencies to be mocked or stubbed out.

Dependencies can be injected into objects by many means (such as constructor injection or setter injection). One can even use specialized dependency injection frameworks (e.g. Spring) to do that, but they certainly aren't required. You don't need those frameworks to have dependency injection. Instantiating and passing objects (dependencies) explicitly is just as good an injection as injection by framework.",
  " found this funny example in terms of loose coupling:

Any application is composed of many objects that collaborate with each other to perform some useful stuff. Traditionally each object is responsible for obtaining its own references to the dependent objects (dependencies) it collaborate with. This leads to highly coupled classes and hard-to-test code.

For example, consider a Car object.

A Car depends on wheels, engine, fuel, battery, etc. to run. Traditionally we define the brand of such dependent objects along with the definition of the Car object.

Without Dependency Injection (DI):

class Car{
  private Wheel wh= new NepaliRubberWheel();
  private Battery bt= new ExcideBattery();

  //The rest
}
Here, the Car object is responsible for creating the dependent objects.

What if we want to change the type of its dependent object - say Wheel - after the initial NepaliRubberWheel() punctures? We need to recreate the Car object with its new dependency say  ChineseRubberWheel(), but only the Car manufacturer can do that.

Then what does the Dependency Injection do us for...?

When using dependency injection, objects are given their dependencies at run time rather than compile time (car manufacturing time). So that we can now change the Wheel whenever we want. Here, the dependency (wheel) can be injected into Car at run time.

After using dependency injection:

Here, we are injecting the dependencies (Wheel and Battery) at runtime. Hence the term : Dependency Injection.

class Car{
  private Wheel wh= [Inject an Instance of Wheel (dependency of car) at runtime]
  private Battery bt= [Inject an Instance of Battery (dependency of car) at runtime]
  Car(Wheel wh,Battery bt) {
      this.wh = wh;
      this.bt = bt;
  }
  //Or we can have setters
  void setWheel(Wheel wh) {
      this.wh = wh;
  }
}",
  "Let's imagine that you want to go fishing:

Without dependency injection, you need to take care of everything yourself. You need to find a boat, to buy a fishing rod, to look for bait, etc. It's possible, of course, but it puts a lot of responsibility on you. In software terms, it means that you have to perform a lookup for all these things.
With dependency injection, someone else takes care of all the preparation and makes the required equipment available to you. You will receive (\"be injected\") the boat, the fishing rod and the bait - all ready to use.",
  "You should however delete that Guido quote: It was from an early draft of python 2.2 release notes, and it was changed in 2.2.3 to: However, class methods are still useful in other places, for example, to program inheritable alternate constructors. Even the original quote is very misleading, as he only said that the python distribuition does not use classmethod. But just because python itself don't use a given feature, it doesn't mean it's a useless feature. Think about complex numbers or even sqrt: python itself may not use either, but it's far from being useless to offer",
  "A staticmethod is a method that knows nothing about the class or instance it was called on. It just gets the arguments that were passed, no implicit first argument. It is basically useless in Python -- you can just use a module function instead of a staticmethod.

A classmethod, on the other hand, is a method that gets passed the class it was called on, or the class of the instance it was called on, as first argument. This is useful when you want the method to be a factory for the class: since it gets the actual class it was called on as first argument, you can always instantiate the right class, even when subclasses are involved. Observe for instance how dict.fromkeys(), a classmethod, returns an instance of the subclass when called on a subclass:

>>> class DictSubclass(dict):
...     def __repr__(self):
...         return \"DictSubclass\"
...
>>> dict.fromkeys(\"abc\")
{'a': None, 'c': None, 'b': None}
>>> DictSubclass.fromkeys(\"abc\")
DictSubclass
>>> ",
  "Official python docs:

@classmethod

A class method receives the class as implicit first argument, just like an instance method receives the instance. To declare a class method, use this idiom:

class C:
    @classmethod
    def f(cls, arg1, arg2, ...): ...
The @classmethod form is a function decorator – see the description of function definitions in Function definitions for details.

It can be called either on the class (such as C.f()) or on an instance (such as C().f()). The instance is ignored except for its class. If a class method is called for a derived class, the derived class object is passed as the implied first argument.

Class methods are different than C++ or Java static methods. If you want those, see staticmethod() in this section.
@staticmethod

A static method does not receive an implicit first argument. To declare a static method, use this idiom:

class C:
    @staticmethod
    def f(arg1, arg2, ...): ...
The @staticmethod form is a function decorator – see the description of function definitions in Function definitions for details.

It can be called either on the class (such as C.f()) or on an instance (such as C().f()). The instance is ignored except for its class.

Static methods in Python are similar to those found in Java or C++. For a more advanced concept, see  classmethod() in this section.",
  "Settings.Secure#ANDROID_ID returns the Android ID as an unique for each user 64-bit hex string.

import android.provider.Settings.Secure;

private String android_id = Secure.getString(getContext().getContentResolver(),
                                                        Secure.ANDROID_ID); ",
  "As of recent versions of Android, many of the issues with ANDROID_ID have been resolved, and I believe this approach is no longer necessary. Please take a look at Anthony's answer.

Full disclosure: my app that the below approach was originally used in no longer uses this approach, and we now use the approach outlined in the Android Developer Blog entry that emmby's answer links to (namely, generating and saving a UUID#randomUUID()).",
  "The code sample works great. Remember to add <uses-permission android:name=\"android.permission.READ_PHONE_STATE\" /> to the manifest file. If storing in a database, the returned string is 36 characters long.",
  "Hardware

User's can change their hardware, Android tablet or phone, so unique IDs based on hard are not good ideas for TRACKING USERS
For TRACKING HARDWARE, this is a great idea
Software

User's can wipe/change their ROM if they are rooted
You can track users across platforms(iOS, Android, Windows and Web)
The best want to TRACK AN INDIVIDUAL USER with their consent is to simply have them login(make this seamless using OAuth)",
  "ANDROID_ID is the preferred device identifier. ANDROID_ID is perfectly reliable on versions of Android <=2.1 or >=2.3. Only 2.2 has the problems mentioned in the post.
Several devices by several manufacturers are affected by the ANDROID_ID bug in 2.2.
As far as I've been able to determine, all affected devices have the same ANDROID_ID, which is 9774d56d682e549c. Which is also the same device id reported by the emulator, btw.
Google believes that OEMs have patched the issue for many or most of their devices, but I was able to verify that as of the beginning of April 2011, at least, it's still quite easy to find devices that have the broken ANDROID_ID.",
  "
down vote
Here is the code that Reto Meier used in the Google I/O presentation this year to get a unique id for the user:

private static String uniqueID = null;
private static final String PREF_UNIQUE_ID = \"PREF_UNIQUE_D\";

public synchronized static String id(Context context) {
    if (uniqueID == null) {
        SharedPreferences sharedPrefs = context.getSharedPreferences(
                PREF_UNIQUE_ID, Context.MODE_PRIVATE);
        uniqueID = sharedPrefs.getString(PREF_UNIQUE_ID, null);
        if (uniqueID == null) {
            uniqueID = UUID.randomUUID().toString();
            Editor editor = sharedPrefs.edit();
            editor.putString(PREF_UNIQUE_ID, uniqueID);
            editor.commit();
        }
    }
    return uniqueID;
}
If you couple this with a backup strategy to send preferences to the cloud (also described in Reto's talk, you should have an id that ties to a user and sticks around after the device has been wiped, or even replaced. I plan to use this in analytics going forward (in other words, I have not done that bit yet :).",
  "Also you might consider the Wi-Fi adapter's MAC address. Retrieved thusly:

WifiManager wm = (WifiManager)Ctxt.getSystemService(Context.WIFI_SERVICE);
return wm.getConnectionInfo().getMacAddress();
Requires permission android.permission.ACCESS_WIFI_STATE in the manifest.

Reported to be available even when Wi-Fi is not connected. If Joe from the answer above gives this one a try on his many devices, that'd be nice.

On some devices, it's not available when Wi-Fi is turned off.

NOTE: From Android 6.x, it returns consistent fake mac address: 02:00:00:00:00:00",
  "The jQuery constructor accepts a 2nd parameter called context which can be used to override the context of the selection.

jQuery(\"img\", this);
Which is the same as using .find() like this:

jQuery(this).find(\"img\");
If the imgs you desire are only direct descendants of the clicked element, you can also use .children():

jQuery(this).children(\"img\");",
  "If you are using vim, you may want to try the excellent plugin called fugitive.

You can see the diff of a file between working copy and index with :Gdiff, and then add lines or hunks to the index using classic vim diff commands like dp. Save the modifications in the index and commit with :Gcommit, and you're done.

Very good introductory screencasts here (see esp. part 2).

",
  "When I have a lot of changes, and will end up creating a few commits from the changes, then I want to save my starting point temporarily before staging things.

Like this:

$ git stash -u
Saved working directory and index state WIP on master: 47a1413 ...
$ git checkout -p stash
... step through patch hunks
$ git commit -m \"message for 1st commit\"
$ git checkout -p stash
... step through patch hunks
$ git commit -m \"message for 2nd commit\"
$ git stash pop
Whymarrh's answer is what I usually do, except sometimes there are lots of changes and I can tell I might make a mistake while staging things, and I want a committed state I can fall back on for a second pass.",
  "1) Set the new text:

myLabel.text = @\"Some Text\"

2) Set the maximum number of lines to 0 (automatic):

myLabel.numberOfLines = 0

3) Set the frame of the label to the maximum size:

myLabel.frame = CGRectMake(20,20,200,800)

4) Call sizeToFit to reduce the frame size so the contents just fit:

[myLabel sizeToFit]

The labels frame is now just high and wide enough to fit your text. The top left should be unchanged. I have tested this only with top left aligned text. For other alignments, you might have to modify the frame afterwards.

Also, my label has word wrapping enabled.",
  "The MySQL extension:

Is not under active development
Is officially deprecated as of PHP 5.5 (released June 2013).
Has been removed entirely as of PHP 7.0 (released December 2015)
Lacks an OO interface
Doesn't support:
Non-blocking, asynchronous queries
Prepared statements or parameterized queries
Stored procedures
Multiple Statements
Transactions
The \"new\" password authentication method (on by default in MySQL 5.6; required in 5.7)
All of the functionality in MySQL 5.1
Since it is deprecated, using it makes your code less future proof.

Lack of support for prepared statements is particularly important as they provide a clearer, less error prone method of escaping and quoting external data than manually escaping it with a separate function call.

See the comparison of SQL extensions.",
  "Adding a couple extra lines with a proven technique such as PDO or MySQLi still affords the ease of use PHP has always offered. I hope for the sake of the developer he/she knows that seeing these god-awful mysql_* functions in any tutorial actually detracts from the lesson, and should tell the OP that this kind of code is soooo 10 years ago- and should question the relevance of the tutorial,too!",
  "The mysql_ functions are:

out of date - they're not maintained any more
don't allow you to move easily to another database backend
don't support prepared statements, hence
encourage programmers to use concatenation to build queries, leading to SQL injection vulnerabilities",
  "Nevertheless, there are also some non-technical issues, which can make your experience a bit harder

further use of these functions with modern PHP versions will raise deprecated-level notices. They simply can be turned off.
in a distant future they can be possibly removed from the default PHP build. Not a big deal too, as mydsql ext will be moved into PECL and every hoster will be happy to complie PHP with it, as they don't want to lose clients whose sites were working for decades.
strong resistance from Stackoverflow community. Еvery time you mention these honest functions, you being told that they are under strict taboo.
being an average php user, most likely your idea of using these functions is error-prone and wrong. Just because of all these numerous tutorials and manuals which teach you wrong way. Not the functions themselves - I have to emphasize it - but the way they are used.",
  "There are many reasons, but perhaps the most important one is that those functions encourage insecure programming practices because they do not support prepared statements. Prepared statements help prevent SQL injection attacks.

When using mysql_* functions, you have to remember to run user-supplied parameters through mysql_real_escape_string(). If you forget in just one place or if you happen to escape only part of the input, your database may be subject to attack.

Using prepared statements in PDO or mysqli will make it so that these sorts of programming errors are more difficult to make.",
  "It's pretty simple really:

a[start:end] # items start through end-1
a[start:]    # items start through the rest of the array
a[:end]      # items from the beginning through end-1
a[:]         # a copy of the whole array
There is also the step value, which can be used with any of the above:

a[start:end:step] # start through not past end, by step
The key point to remember is that the :end value represents the first value that is not in the selected slice. So, the difference beween end and start is the number of elements selected (if step is 1, the default).

The other feature is that start or end may be a negative number, which means it counts from the end of the array instead of the beginning. So:

a[-1]    # last item in the array
a[-2:]   # last two items in the array
a[:-2]   # everything except the last two items
Python is kind to the programmer if there are fewer items than you ask for. For example, if you ask for a[:-2] and a only contains one element, you get an empty list instead of an error. Sometimes you would prefer the error, so you have to be aware that this may happen.",
  "Enumerating the possibilities allowed by the grammar:

>>> seq[:]                # [seq[0],   seq[1],          ..., seq[-1]    ]
>>> seq[low:]             # [seq[low], seq[low+1],      ..., seq[-1]    ]
>>> seq[:high]            # [seq[0],   seq[1],          ..., seq[high-1]]
>>> seq[low:high]         # [seq[low], seq[low+1],      ..., seq[high-1]]
>>> seq[::stride]         # [seq[0],   seq[stride],     ..., seq[-1]    ]
>>> seq[low::stride]      # [seq[low], seq[low+stride], ..., seq[-1]    ]
>>> seq[:high:stride]     # [seq[0],   seq[stride],     ..., seq[high-1]]
>>> seq[low:high:stride]  # [seq[low], seq[low+stride], ..., seq[high-1]]
Of course, if (high-low)%stride != 0, then the end point will be a little lower than high-1.

Extended slicing (with commas and ellipses) are mostly used only by special data structures (like Numpy); the basic sequences don't support them.",
  "Explain Python's slice notation
In short, the colons (:) in subscript notation (subscriptable[subscriptarg]) make slice notation - which has the optional arguments, start, stop, step:

sliceable[start:stop:step]
Python slicing is a computationally fast way to methodically access parts of your data. In my opinion, to be even an intermediate Python programmer, it's one aspect of the language that it is necessary to be familiar with.",
  "XMLReader

The XMLReader extension is an XML pull parser. The reader acts as a cursor going forward on the document stream and stopping at each node on the way.
XMLReader, like DOM, is based on libxml. I am not aware of how to trigger the HTML Parser Module, so chances are using XMLReader for parsing broken HTML might be less robust than using DOM where you can explicitly tell it to use libxml's HTML Parser Module.

A basic usage example can be found at getting all values from h1 tags using php

XML Parser

This extension lets you create XML parsers and then define handlers for different XML events. Each XML parser also has a few parameters you can adjust.
The XML Parser library is also based on libxml, and implements a SAX style XML push parser. It may be a better choice for memory management than DOM or SimpleXML, but will be more difficult to work with than the pull parser implemented by XMLReader.",
  "Delete your debug certificate under ~/.android/debug.keystore on Linux and Mac OS X; the directory is something like %USERPROFILE%/.androidon Windows.

The Eclipse plugin should then generate a new certificate when you next try to build a debug package. You may need to clean and then build to generate the certificate.",
  "Upon installation, the Android SDK generates a debug signing certificate for you in a keystore called debug.keystore. The Eclipse plug-in uses this certificate to sign each application build that is generated.

Unfortunately a debug certificate is only valid for 365 days. To generate a new one you must delete the existing debug.keystore file. Its location is platform dependent - you can find it in Preferences - Android - Build - Default debug keystore.",
  "Debugging

How do you find the source of a NullReferenceException? Apart from looking at the exception itself, which will be thrown exactly at the location where it occurs, the general rules of debugging in Visual Studio apply: place strategic breakpoints and inspect your variables, either by hovering the mouse over their names, opening a (Quick)Watch window or using the various debugging panels like Locals and Autos.

If you want to find out where the reference is or isn't set, right-click its name and select \"Find All References\". You can then place a breakpoint at every found location and run your program with the debugger attached. Every time the debugger breaks on such a breakpoint, you need to determine whether you expect the reference to be non-null, inspect the variable and and verify that it points to an instance when you expect it to.

By following the program flow this way, you can find the location where the instance should not be null, and why it isn't properly set.",
  "Bitshift Operators (used for Stream I/O)

The bitshift operators << and >>, although still used in hardware interfacing for the bit-manipulation functions they inherit from C, have become more prevalent as overloaded stream input and output operators in most applications. For guidance overloading as bit-manipulation operators, see the section below on Binary Arithmetic Operators. For implementing your own custom format and parsing logic when your object is used with iostreams, continue.

The stream operators, among the most commonly overloaded operators, are binary infix operators for which the syntax specifies no restriction on whether they should be members or non-members. Since they change their left argument (they alter the stream’s state), they should, according to the rules of thumb, be implemented as members of their left operand’s type. However, their left operands are streams from the standard library, and while most of the stream output and input operators defined by the standard library are indeed defined as members of the stream classes, when you implement output and input operations for your own types, you cannot change the standard library’s stream types. That’s why you need to implement these operators for your own types as non-member functions. The canonical forms of the two are these:

std::ostream& operator<<(std::ostream& os, const T& obj)
{
  // write obj to stream

  return os;
}

std::istream& operator>>(std::istream& is, T& obj)
{
  // read obj from stream

  if( /* no valid object of T found in stream */ )
    is.setstate(std::ios::failbit);

  return is;
}
When implementing operator>>, manually setting the stream’s state is only necessary when the reading itself succeeded, but the result is not what would be expected.

Function call operator

The function call operator, used to create function objects, also known as functors, must be defined as a member function, so it always has the implicit this argument of member functions. Other than this it can be overloaded to take any number of additional arguments, including zero.

Throughout the C++ standard library, function objects are always copied. Your own function objects should therefore be cheap to copy. If a function object absolutely needs to use data which is expensive to copy, it is better to store that data elsewhere and have the function object refer to it.

Comparison operators

The binary infix comparison operators should, according to the rules of thumb, be implemented as non-member functions1. The unary prefix negation ! should (according to the same rules) be implemented as a member function. (but it is usually not a good idea to overload it.)

The standard library’s algorithms (e.g. std::sort()) and types (e.g. std::map) will always only expect operator< to be present. However, the users of your type will expect all the other operators to be present, too, so if you define operator<, be sure to follow the third fundamental rule of operator overloading and also define all the other boolean comparison operators. The canonical way to implement them is this:

inline bool operator==(const X& lhs, const X& rhs){ /* do actual comparison */ }
inline bool operator!=(const X& lhs, const X& rhs){return !operator==(lhs,rhs);}
inline bool operator< (const X& lhs, const X& rhs){ /* do actual comparison */ }
inline bool operator> (const X& lhs, const X& rhs){return  operator< (rhs,lhs);}
inline bool operator<=(const X& lhs, const X& rhs){return !operator> (lhs,rhs);}
inline bool operator>=(const X& lhs, const X& rhs){return !operator< (lhs,rhs);}
The important thing to note here is that only two of these operators actually do anything, the others are just forwarding their arguments to either of these two to do the actual work.

The syntax for overloading the remaining binary boolean operators (||, &&) follows the rules of the comparison operators. However, it is very unlikely that you would find a reasonable use case for these2.

1 As with all rules of thumb, sometimes there might be reasons to break this one, too. If so, do not forget that the left-hand operand of the binary comparison operators, which for member functions will be *this, needs to be const, too. So a comparison operator implemented as a member function would have to have this signature:

bool operator<(const X& rhs) const { /* do actual comparison with *this */ }
(Note the const at the end.)

2 It should be noted that the built-in version of || and && use shortcut semantics. While the user defined ones (because they are syntactic sugar for method calls) do not use shortcut semantics. User will expect these operators to have shortcut semantics, and their code may depend on it, Therefore it is highly advised NEVER to define them.",
  "Eval is not necessary. This will work fine:

var date = new Date(parseInt(jsonDate.substr(6)));
The substr function takes out the \"/Date(\" part, and the parseInt function gets the integer and ignores the \")/\" at the end. The resulting number is passed into the Date constructor.

EDIT: I have intentionally left out the radix (the 2nd argument to parseInt); see my comment below. Also, I completely agree with Rory's comment: ISO-8601 dates are preferred over this old format -- so this format generally shouldn't be used for new development. See the excellent Json.NET library for a great alternative that serializes dates using the ISO-8601 format.

For ISO-8601 formatted JSON dates, just pass the string into the Date constructor:

var date = new Date(jsonDate); //no ugly parsing needed; full timezone support",
  "For those using Newtonsoft Json.NET, read up on how to do it via Native JSON in IE8, Firefox 3.5 plus Json.NET.

Also the documentation on changing the format of dates written by Json.NET is useful: Serializing Dates with Json.NET

For those that are too lazy, here are the quick steps. As JSON has a loose DateTime implementation, you need to use the IsoDateTimeConverter(). Note that since Json.NET 4.5 the default date format is ISO so the code below isn't needed.

string jsonText = JsonConvert.SerializeObject(p, new IsoDateTimeConverter());
The JSON will come through as

\"fieldName\": \"2009-04-12T20:44:55\"",
  "The original example:

/Date(1224043200000)/
does not reflect the formatting used by WCF when sending dates via WCF REST using the built-in JSON serialization. (at least on .NET 3.5, SP1)

I found the answer here helpful, but a slight edit to the regex is required, as it appears that the timezone GMT offset is being appended onto the number returned (since 1970) in WCF JSON.

In a WCF service I have:",
  "JavaScript/jQuery

var = MyDate_String_Value = \"/Date(1224043200000)/\"
var value = new Date
            (
                 parseInt(MyDate_String_Value.replace(/(^.*\()|([+-].*$)/g, ''))
            );
var dat = value.getMonth() +
                         1 +
                       \"/\" +
           value.getDate() +
                       \"/\" +
       value.getFullYear();
Result - \"10/15/2008\"",
  "If your purpose is the isolation, I think Docker is what you want.

Vagrant is a virtual machine manager. It allows you to script the virtual machine configuration as well as the provisioning. However, it is still a virtual machine depending on VirtualBox (or others) with a huge overhead. It requires you to have a hard drive file that can be huge, it takes a lot of ram, and performance may be not very good.

Docker on the other hand uses kernel cgroup and namespacing via LXC. It means that you are using the same kernel as the host and the same file system. You can use Dockerfile with the docker build command in order to handle the provisioning and configuration of your container. You have an example at docs.docker.com on how to make your Dockerfile; it is very intuitive.

The only reason you could want to use Vagrant is if you need to do BSD, Windows or other non-Linux development on your Ubuntu box. Otherwise, go for Docker.",
  "Vagrant can do much more than that. Of course, if you prepare a specific virtual machine for every project, this will last. But during development I often end up adding more services / daemons / settings (eg. when I decide to use RabbitMQ for a project during development). Purely VM approach will require that you prepare a new image, with RabbitMQ installed and configured, and force developers to change their VM to this new one. For Vagrant - I'm adding appropriate lines in vagrant confguration and all developers can upgrade their VMs easily (using vagrant provision).",
  "I preface my reply by admitting I have no experience with Docker, other than as an avid observer of what looks to be a really neat solution that's gaining a lot of traction.

I do have a decent amount of experience with Vagrant and can highly recommend it. It's certainly a more heavyweight solution in terms of it being VM based instead of LXC based. However, I've found a decent laptop (8 GB RAM, i5/i7 CPU) has no trouble running a VM using Vagrant/VirtualBox alongside development tooling.

One of the really great things with Vagrant is the integration with Puppet/Chef/shell scripts for automating configuration. If you're using one of these options to configure your production environment, you can create a development environment which is as close to identical as you're going to get, and this is exactly what you want.

The other great thing with Vagrant is that you can version your Vagrantfile along with your application code. This means that everyone else on your team can share this file and you're guaranteed that everyone is working with the same environment configuration.

Interestingly, Vagrant and Docker may actually be complimentary. Vagrant can be extended to support different virtualization providers, and it may be possible that Docker is one such provider which gets support in the near future. See https://github.com/dotcloud/docker/issues/404 for recent discussion on the topic.",
  "With Vagrant now you can have Docker as a provider. http://docs.vagrantup.com/v2/docker/. Docker provider can be used instead of VirtualBox or VMware.

Please note that you can also use Docker for provisioning with Vagrant. This is very different than using Docker as a provider. http://docs.vagrantup.com/v2/provisioning/docker.html

This means you can replace Chef or Puppet with Docker. You can use combinations like Docker as provider (VM) with Chef as provisioner. Or you can use VirtualBox as provider and Docker as provisioner.",
  "Using both is an important part of application delivery testing. I am only beginning to get involved with Docker and thinking very hard about an application team that has terrible complexity in building and delivering its software. Think of a classic Phoenix Project / Continuous Delivery situation.

The thinking goes something like this:

Take a Java/Go application component and build it as a container (note, not sure if the app should be built in the container or built then installed to the container)
Deliver the container to a Vagrant VM.
Repeat this for all application components.
Iterate on the component(s) to code against.
Continuously test the delivery mechanism to the VM(s) managed by Vagrant
Sleep well knowing when it is time to deploy the container, that integration testing was occurring on a much more continuous basis than it was before Docker.
This seems to be the logical extension of Mitchell's statement that Vagrant is for development combined with Farley/Humbles thinking in Continuous Delivery. If I, as a developer, can shrink the feedback loop on integration testing and application delivery, higher quality and better work environments will follow.

The fact that as a developer I am constantly and consistently delivering containers to the VM and testing the application more holistically means that production releases will be further simplified.

So I see Vagrant evolving as a way of leveraging some of the awesome consequences Docker will have for app deployment.",
  "I blogged about this a while back, quoting on Todd Snyder's excellent post on the difference between the two:

Here are the key differences between the patterns:

MVP Pattern

View is more loosely coupled to the model. The presenter is responsible for binding the model to the view.
Easier to unit test because interaction with the view is through an interface
Usually view to presenter map one to one. Complex views may have multi presenters.
MVC Pattern

Controller are based on behaviors and can be shared across views
Can be responsible for determining which view to display
It is the best explanation on the web I could find.",
  "This is a great depiction of the schematic, showing the abstraction and complete isolation of any GUI related (view stuff) from the API of the presenter. One minor point: A master presenter could be used where there is only one presenter, rather than one per view, but your diagram is the cleanest. IMO, the biggest difference between MVC/MVP is that MVP tries to keep the view totally void of anything other than display of the current 'view state' (view data), while also disallowing the view any knowledge of Model objects. Thus the interfaces, needing to be there, to inject that state",
  "MVP is not necessarily a scenario where the View is in charge (see Taligent's MVP for example).
I find it unfortunate that people are still preaching this as a pattern (View in charge) as opposed to an anti-pattern as it contradicts \"It\'s just a view\" (Pragmatic Programmer). \"It\'s just a view\" states that the final view shown to the user is a secondary concern of the application. Microsoft's MVP pattern renders re-use of Views much more difficult and conveniently excuses Microsoft's designer from encouraging bad practice.

To be perfectly frank, I think the underlying concerns of MVC hold true for any MVP implementation and the differences are almost entirely semantic. As long as you are following separation of concerns between the view (that displays the data), the controller (that initialises and controls user interaction) and the model (the underlying data and/or services)) then you are acheiving the benefits of MVC. If you are acheiving the benefits then who really cares whether your pattern is MVC, MVP or Supervising Controller? The only real pattern remains as MVC, the rest are just differing flavours of it.

Consider this highly exciting article that comprehensively lists a number of these differing implementations. You may note that they're all basically doing the same thing but slightly differently.

I personally think MVP has only been recently re-introduced as a catchy term to either reduce arguments between semantic bigots who argue whether something is truly MVC or not or to justify Microsofts Rapid Application Development tools. Neither of these reasons in my books justify its existence as a separate design pattern.",
  "MVP: the view is in charge.

The view, in most cases, creates its presenter. The presenter will interact with the model and manipulate the view through an interface. The view will sometimes interact with the presenter, usually through some interface. This comes down to implementation; do you want the view to call methods on the presenter or do you want the view to have events the presenter listens to? It boils down to this: The view knows about the presenter. The view delegates to the presenter.

MVC: the controller is in charge.

The controller is created or accessed based on some event/request. The controller then creates the appropriate view and interacts with the model to further configure the view. It boils down to: the controller creates and manages the view; the view is slave to the controller. The view does not know about the controller.",
  "sayHello() uses the $this pointer, so the vtable is invoked to call Geek::getTitle(). sayGoodbye() uses self::getTitle(), so the vtable is not used, and Person::getTitle() is called. In both cases, we are dealing with the method of an instantiated object, and have access to the $this pointer within the called functions.",
  "This exception is thrown when an application attempts to perform a networking operation on its main thread. Run your code in AsyncTask:

class RetrieveFeedTask extends AsyncTask<String, Void, RSSFeed> {

    private Exception exception;

    protected RSSFeed doInBackground(String... urls) {
        try {
            URL url = new URL(urls[0]);
            SAXParserFactory factory = SAXParserFactory.newInstance();
            SAXParser parser = factory.newSAXParser();
            XMLReader xmlreader = parser.getXMLReader();
            RssHandler theRSSHandler = new RssHandler();
            xmlreader.setContentHandler(theRSSHandler);
            InputSource is = new InputSource(url.openStream());
            xmlreader.parse(is);

            return theRSSHandler.getFeed();
        } catch (Exception e) {
            this.exception = e;

            return null;
        }
    }

    protected void onPostExecute(RSSFeed feed) {
        // TODO: check this.exception
        // TODO: do something with the feed
    }
}
How to execute the task:

In MainActivity.java file you can add this line within your oncreate() method

new RetrieveFeedTask().execute(urlToRssFeed);
Don't forget to add this to AndroidManifest.xml file:

<uses-permission android:name=\"android.permission.INTERNET\"/>",
  "Special member functions

What does it mean to copy a person object? The main function shows two distinct copying scenarios. The initialization person b(a); is performed by the copy constructor. Its job is to construct a fresh object based on the state of an existing object. The assignment b = a is performed by the copy assignment operator. Its job is generally a little more complicated, because the target object is already in some valid state that needs to be dealt with.

Since we declared neither the copy constructor nor the assignment operator (nor the destructor) ourselves, these are implicitly defined for us. Quote from the standard:

The [...] copy constructor and copy assignment operator, [...] and destructor are special member functions. [ Note: The implementation will implicitly declare these member functions for some class types when the program does not explicitly declare them. The implementation will implicitly define them if they are used. [...] end note ] [n3126.pdf section 12 §1]
By default, copying an object means copying its members:

The implicitly-defined copy constructor for a non-union class X performs a memberwise copy of its subobjects. [n3126.pdf section 12.8 §16]

The implicitly-defined copy assignment operator for a non-union class X performs memberwise copy assignment of its subobjects. [n3126.pdf section 12.8 §30]",
  "Sorting solutions have been proposed, but sorting is a little too much: We don't need order; we just need equality groups.

So hashing would be enough (and faster).

For each color of socks, form a pile. Iterate over all socks in your input basket and distribute them onto the color piles.
Iterate over each pile and distribute it by some other metric (e.g. pattern) into a second set of piles
Recursively apply this scheme until you have distributed all socks onto very small piles that you can visually process immediately
This kind of recursive hash partitioning is actually being done by SQL Server when it needs to hash join or hash aggregate over huge data sets. It distributes its build input stream into many partitions which are independent. This scheme scales to arbitrary amounts of data and multiple CPUs linearly.

You don't need recursive partitioning if you can find a distribution key (hash key) that provides enough buckets that each bucket is small enough to be processed very quickly. Unfortunately, I don't think socks have such a property.

If each sock had an integer called \"PairID\" one could easily distribute them into 10 buckets according to PairID % 10 (the last digit).

The best real-world partitioning I can think of is creating a rectangle of piles: one dimension is color, the other is pattern. Why a rectangle? Because we need O(1) random-access to piles. (A 3D cuboid would also work, but that is not very practical.)",
  "As the architecture of the human brain is completely different than a modern CPU, this question makes no practical sense.

Humans can win over CPU algorithms using the fact that \"finding a matching pair\" can be one operation for a set that isn't too big.

My algorithm:

spread_all_socks_on_flat_surface();
while (socks_left_on_a_surface()) {
     // Thanks to human visual SIMD, this is one, quick operation.
     pair = notice_any_matching_pair();
     remove_socks_pair_from_surface(pair);
}
At least this is what I am using in real life, and I find it very efficient. The downside is it requires a flat surface, but it's usually abundant.",
  "Case 1: All socks are identical (this is what I do in real life by the way).

Pick any two of them to make a pair. Constant time.

Case 2: There are a constant number of combinations (ownership, color, size, texture, etc.).

Use radix sort. This is only linear time since comparison is not required.

Case 3: The number of combinations is not known in advance (general case).

We have to do comparison to check whether two socks come in pair. Pick one of the O(n log n) comparison-based sorting algorithms.

However in real life when the number of socks is relatively small (constant), these theoretically optimal algorithms wouldn't work well. It might take even more time than sequential search, which theoretically requires quadratic time.",
  "What I do is that I pick up the first sock and put it down (say, on the edge of the laundry bowl). Then I pick up another sock and check to see if it's the same as the first sock. If it is, I remove them both. If it's not, I put it down next to the first sock. Then I pick up the third sock and compare that to the first two (if they're still there). Etc.

This approach can be fairly easily be implemented in an array, assuming that \"removing\" socks is an option. Actually, you don't even need to \"remove\" socks. If you don't need sorting of the socks (see below), then you can just move them around and end up with an array that has all the socks arranged in pairs in the array.

Assuming that the only operation for socks is to compare for equality, this algorithm is basically still an n2 algorithm, though I don't know about the average case (never learned to calculate that).

Sorting, of course improves efficiency, especially in real life where you can easily \"insert\" a sock between two other socks. In computing the same could be achieved by a tree, but that's extra space. And, of course, we're back at NlogN (or a bit more, if there are several socks that are the same by sorting criteria, but not from the same pair).

Other than that, I cannot think of anything, but this method does seem to be pretty efficient in real life. :)",
  "Implementation

There are three different implementations: pseudo-elements, pseudo-classes, and nothing.

WebKit, Blink (Safari, Google Chrome, Opera 15+) and Microsoft Edge are using a pseudo-element: ::-webkit-input-placeholder. [Ref]
Mozilla Firefox 4 to 18 is using a pseudo-class: :-moz-placeholder (one colon). [Ref]
Mozilla Firefox 19+ is using a pseudo-element: ::-moz-placeholder, but the old selector will still work for a while. [Ref]
Internet Explorer 10 and 11 are using a pseudo-class: :-ms-input-placeholder. [Ref]
Internet Explorer 9 and lower does not support the placeholder attribute at all, while Opera 12 and lower do not support any CSS selector for placeholders.

The discussion about the best implementation is still going on. Note the pseudo-elements act like real elements in the Shadow DOM. A padding on an input will not get the same background color as the pseudo-element.",
  "You may also want to style textareas:

input::-webkit-input-placeholder, textarea::-webkit-input-placeholder {
  color: #636363;
}
input:-moz-placeholder, textarea:-moz-placeholder {
  color: #636363;
}",
  "In C, you don't need to cast the return value of malloc. The pointer to void returned by malloc is automagically converted to the correct type. However, if you want your code to compile with a C++ compiler, a cast is needed. A preferred alternative among the community is to use the following:

int *sieve = malloc(sizeof *sieve * length);
which additionally frees you from having to worry about changing the right-hand side of the expression if ever you change the type of sieve.

Casts are bad, as people have pointed out. Specially pointer casts.",
  "You do cast, because:

It makes your code more portable between C and C++, and as SO experience shows, a great many programmers claim they are writing in C when they are really writing in C++ (or C plus local compiler extensions).
Failing to do so can hide an error: note all the SO examples of confusing when to write type * versus type **.
The idea that it keeps you from noticing you failed to #include an appropriate header file misses the forest for the trees. It's the same as saying \"don\'t worry about the fact you failed to ask the compiler to complain about not seeing prototypes -- that pesky stdlib.h is the REAL important thing to remember!\"
It forces an extra cognitive cross-check. It puts the (alleged) desired type right next to the arithmetic you're doing for the raw size of that variable. I bet you could do an SO study that shows that malloc() bugs are caught much faster when there's a cast. As with assertions, annotations that reveal intent decrease bugs.
Repeating yourself in a way that the machine can check is often a great idea. In fact, that's what an assertion is, and this use of cast is an assertion. Assertions are still the most general technique we have for getting code correct, since Turing came up with the idea so many years ago.",
  "As other stated, it is not needed for C, but for C++. If you think you are going to compile your C code with a C++ compiler, for which reasons ever, you can use a macro instead, like:

#ifdef __cplusplus
# define NEW(type, count) ((type *)calloc(count, sizeof(type)))
#else
# define NEW(type, count) (calloc(count, sizeof(type)))
#endif
That way you can still write it in a very compact way:

int *sieve = NEW(int, 1);
and it will compile for C and C++.",
  "Try:

git config core.fileMode false
From git-config(1):

   core.fileMode
       If false, the executable bit differences between the index and the
       working copy are ignored; useful on broken filesystems like FAT.
       See git-update-index(1). True by default.
The -c flag can be used to set this option for one-off commands:

git -c core.fileMode=false diff
And the --global flag will make it be the default behavior for the logged in user.

git config --global core.fileMode false",
  "In the simplest terms, the tilde matches the most recent minor version (the middle number). ~1.2.3 will match all 1.2.x versions but will miss 1.3.0.

The caret, on the other hand, is more relaxed. It will update you to the most recent major version (the first number). ^1.2.3 will match any 1.x.x release including 1.3.0, but will hold off on 2.0.0.",
  "Npm allows installing newer version of a package than the one specified. Using tilde (~) gives you bug fix releases and caret (^) gives you backwards compatible new functionality as well.

The problem is old versions usually don't receive bug fixes that much, so npm uses caret (^) as the default for --save.",
  "It's actually not too complicated...

Say you're on domain example.com, and you want to make a request to domain example.net. To do so, you need to cross domain boundaries, a no-no in most of browserland.

The one item that bypasses this limitation is <script> tags. When you use a script tag, the domain limitation is ignored, but under normal circumstances, you can't really do anything with the results, the script just gets evaluated.

Enter JSONP. When you make your request to a server that is JSONP enabled, you pass a special parameter that tells the server a little bit about your page. That way, the server is able to nicely wrap up its response in a way that your page can handle.

For example, say the server expects a parameter called \"callback\" to enable its JSONP capabilities. Then your request would look like:

http://www.example.net/sample.aspx?callback=mycallback",
  "JSONP is really a simple trick to overcome the XMLHttpRequest same domain policy. (As you know one cannot send AJAX (XMLHttpRequest) request to a different domain.)

So - instead of using XMLHttpRequest we have to use script HTML tags, the ones you usually use to load js files, in order for js to get data from another domain. Sounds weird?

Thing is - turns out script tags can be used in a fashion similar to XMLHttpRequest! Check this out:

",
  "When homebrew installs a new formula, it puts it in a versioned directory like /usr/local/Cellar/postgresql/9.3.1. Only symbolic links to this folder are then installed globally. In principle, this makes it pretty easy to switch between two installed versions. (*)

If you have been using homebrew for longer and never removed older versions (using, for example brew cleanup), chances are that some older version of your program may still be around. If you want to simply activate that previous version, brew switch is the easiest way to do this.

Check with brew info postgresql (or brew switch postgresql <TAB>) whether the older version is installed:",
  "Explanation: the shortcuts based on + (including the implied use in sum) are, of necessity, O(L**2) when there are L sublists -- as the intermediate result list keeps getting longer, at each step a new intermediate result list object gets allocated, and all the items in the previous intermediate result must be copied over (as well as a few new ones added at the end). So (for simplicity and without actual loss of generality) say you have L sublists of I items each: the first I items are copied back and forth L-1 times, the second I items L-2 times, and so on; total number of copies is I times the sum of x for x from 1 to L excluded, i.e., I * (L**2)/2.

The list comprehension just generates one list, once, and copies each item over (from its original place of residence to the result list) also exactly once.",
  "I'm not sure \"this requires you to understand Python syntax\" is an argument against using a given technique in Python. Sure, complex usage could confuse, but the \"splat\" operator is generally useful in many circumstances, and this isn't using it in a particularly obscure way; rejecting all language features that aren't necessarily obvious to beginning users means you're tying one hand behind your back. May as well throw out list comprehensions too while you're at it; users from other backgrounds would find a for loop that repeatedly appends more obvious",
  "As per Apple's documentation:

In the project navigator, select your project.
Select your target.
Select the \"Build Phases\" tab.
Open \"Link Binaries With Libraries\" expander.
Click the + button.
Select your framework.
(optional) Drag and drop the added framework to the \"Frameworks\" group.",
  "Ok, I finally did it, as follows: 1) In the \"project navigator\", open the \"frameworks\" folder and select one the existing frameworks (e.g. UIKit.framework) 2) Right click and select \"Show in Finder\" from the menu 3) From the newly opened folder in the finder, drag the framework folder you are interested in (e.g. OpenGLES.framework) into the \"frameworks\" folder in XCode 4) Be sure not to \"copy items into destination\'s group folder\" 5) Choosing \"Create groups for any added folders\" seems to make it ",
  "In project

Select the project navigator
Click on Build Phages
And click on link binary with libraries
And add +Button and add your Frameworks",
  "If I understood it right you are doing an XMLHttpRequest to a different domain than your page is on. So the browser is blocking it as it usually allows a request in the same origin for security reasons. You need to do something different when you want to do a cross-domain request. A tutorial about how to achieve that is Using CORS.

When you are using postman they are not restricted by this policy. Quoted from Cross-Origin XMLHttpRequest:",
  "This is not a fix for production or when application has to be shown to the client, this is only helpful when UI and Backend development are on different servers and in production they are actually on same server. For example: While developing UI for any application if there is a need to test it locally pointing it to backend server, in that scenario this is the perfect fix. For production fix, CORS headers has to be added to the backend server to allow cross origin access.
The easy way is to just add the extension in google chrome to allow access using CORS.

(https://chrome.google.com/webstore/detail/allow-control-allow-origi/nlfbmbojpeacfghkpbjhddihlkkiljbi?hl=en-US)

Just enable this extension whenever you want allow access to no 'access-control-allow-origin' header request.

Or

In Windows, paste this command in run window

chrome.exe --user-data-dir=\"C:/Chrome dev session\" --disable-web-security
this will open a new chrome browser which allow access to no 'access-control-allow-origin' header request.",
  "It's very simple to solve if you are using PHP. Just add the following script in the beginning of your PHP page which handles the request:

<?php header('Access-Control-Allow-Origin: *'); ?>
Warning : This contains a security issue for your PHP file that it could be called by attackers. you have to use sessions and cookies for authentication to prevent your file/service against this attack. Your service is vulnerable to cross-site request forgery (CSRF).

If you are using Node-red you have to allow CROS in the node-red/settings.js file by un-commenting the following lines:

// The following property can be used to configure cross-origin resource sharing
// in the HTTP nodes.
// See https://github.com/troygoode/node-cors#configuration-options for
// details on its contents. The following is a basic permissive set of options:
httpNodeCors: {
 origin: \"*\",
 methods: \"GET,PUT,POST,DELETE\"
},",
  "There's a cross-domain issue using Ajax. You must be sure you are accessing your files on the same http:// path without www. (or access from http://www. and post to the same path including www.) which the browser considers as another domain when accessing via a www. path, so you see where the problem is. You are posting to a different domain and the browser blocks the flow because of the origin issue.

If the API is not placed on the same host that you are requesting from, the flow is blocked, and you will need to find another way to communicate with the API.",
  "static_cast is used for cases where you basically want to reverse an implicit conversion, with a few restrictions and additions. static_cast performs no runtime checks. This should be used if you know that you refer to an object of a specific type, and thus a check would be unnecessary. Example:

void func(void *data) {
  // Conversion from MyClass* -> void* is implicit
  MyClass *c = static_cast<MyClass*>(data);
  ...
}

int main() {
  MyClass c;
  start_thread(&func, &c)  // func(&c) will be called
      .join();
}
In this example, you know that you passed a MyClass object, and thus there isn't any need for a runtime check to ensure this.",
  "These casts are also called C-style cast. A C-style cast is basically identical to trying out a range of sequences of C++ casts, and taking the first C++ cast that works, without ever considering dynamic_cast. Needless to say, this is much more powerful as it combines all of const_cast, static_cast and reinterpret_cast, but it's also unsafe, because it does not use dynamic_cast.

In addition, C-style casts not only allow you to do this, but they also allow you to safely cast to a private base-class, while the \"equivalent\" static_cast sequence would give you a compile-time error for that.

Some people prefer C-style casts because of their brevity. I use them for numeric casts only, and use the appropriate C++ casts when user defined types are involved, as they provide stricter checking.",
  "const_cast

const_cast(expression) The const_cast<>() is used to add/remove const(ness) (or volatile-ness) of a variable.

static_cast

static_cast(expression) The static_cast<>() is used to cast between the integer types. 'e.g.' char->long, int->short etc.

Static cast is also used to cast pointers to related types, for example casting void* to the appropriate type.

dynamic_cast

Dynamic cast is used to convert pointers and references at run-time, generally for the purpose of casting a pointer or reference up or down an inheritance chain (inheritance hierarchy).

dynamic_cast(expression)

The target type must be a pointer or reference type, and the expression must evaluate to a pointer or reference. Dynamic cast works only when the type of object to which the expression refers is compatible with the target type and the base class has at least one virtual member function. If not, and the type of expression being cast is a pointer, NULL is returned, if a dynamic cast on a reference fails, a bad_cast exception is thrown. When it doesn't fail, dynamic cast returns a pointer or reference of the target type to the object to which expression referred.

reinterpret_cast

Reinterpret cast simply casts one type bitwise to another. Any pointer or integral type can be casted to any other with reinterpret cast, easily allowing for misuse. For instance, with reinterpret cast one might, unsafely, cast an integer pointer to a string pointer.",
  "he static cast performs conversions between compatible types. It is similar to the C-style cast, but is more restrictive. For example, the C-style cast would allow an integer pointer to point to a char.

char c = 10;       // 1 byte
int *p = (int*)&c; // 4 bytes
Since this results in a 4-byte pointer pointing to 1 byte of allocated memory, writing to this pointer will either cause a run-time error or will overwrite some adjacent memory.

*p = 5; // run-time error: stack corruption
In contrast to the C-style cast, the static cast will allow the compiler to check that the pointer and pointee data types are compatible, which allows the programmer to catch this incorrect pointer assignment during compilation.

",
  "In the example below, a MyChild pointer is converted into a MyBase pointer using a dynamic cast. This derived-to-base conversion succeeds, because the Child object includes a complete Base object.

class MyBase
{
  public:
  virtual void test() {}
};
class MyChild : public MyBase {};



int main()
{
  MyChild *child = new MyChild();
  MyBase  *base = dynamic_cast<MyBase*>(child); // ok
}
The next example attempts to convert a MyBase pointer to a MyChild pointer. Since the Base object does not contain a complete Child object this pointer conversion will fail. To indicate this, the dynamic cast returns a null pointer. This gives a convenient way to check whether or not a conversion has succeeded during run-time.",
  "Prefer composition over inheritance as it is more malleable / easy to modify later, but do not use a compose-always approach. With composition, it's easy to change behavior on the fly with Dependency Injection / Setters. Inheritance is more rigid as most languages do not allow you to derive from more than one type. So the goose is more or less cooked once you derive from TypeA.

My acid test for the above is:

Does TypeB want to expose the complete interface (all public methods no less) of TypeA such that TypeB can be used where TypeA is expected? Indicates Inheritance.
e.g. A Cessna biplane will expose the complete interface of an airplane, if not more. So that makes it fit to derive from Airplane.

Does TypeB want only some/part of the behavior exposed by TypeA? Indicates need for Composition.
e.g. A Bird may need only the fly behavior of an Airplane. In this case, it makes sense to extract it out as an interface / class / both and make it a member of both classes.

Update: Just came back to my answer and it seems now that it is incomplete without a specific mention of Barbara Liskov's Liskov Substitution Principle as a test for 'Should I be inheriting from this type?'",
  "If you understand the difference, it's easier to explain.

Procedural Code

An example of this is PHP without the use of classes (particularly before PHP5). All logic is encoded in a set of functions. You may include other files containing helper functions and so on and conduct your business logic by passing data around in functions. This can be very hard to manage as the application grows. PHP5 tries to remedy this by offering more object oriented design.",
  "With all the undeniable benefits provided by inheritance, here's some of its disadvantages.

Disadvantages of Inheritance:

You can't change the implementation inherited from super classes at runtime (obviously because inheritance is defined at compile time).
Inheritance exposes a subclass to details of its parent's class implementation, that's why it's often said that inheritance breaks encapsulation (in a sense that you really need to focus on interfaces only not implementation, so reusing by sub classing is not always preferred).
The tight coupling provided by inheritance makes the implementation of a subclass very bound up with the implementation of a super class that any change in the parent implementation will force the sub class to change.
Excessive reusing by sub-classing can make the inheritance stack very deep and very confusing too.
On the other hand Object composition is defined at runtime through objects acquiring references to other objects. In such a case these objects will never be able to reach each-other's protected data (no encapsulation break) and will be forced to respect each other's interface. And in this case also, implementation dependencies will be a lot less than in case of inheritance.",
  "While in short words I would agree with \"Prefer composition over inheritance\", very often for me it sounds like \"prefer potatoes over coca-cola\". There are places for inheritance and places for composition. You need to understand difference, then this question will disappear. What it really means for me is \"if you are going to use inheritance - think again, chances are you need composition\".

You should prefer potatoes over coca cola when you want to eat, and coca cola over potatoes when you want to drink.

Creating a subclass should mean more than just a convenient way to call superclass methods. You should use inheritance when subclass \"is-a\" super class both structurally and functionally, when it can be used as superclass and you are going to use that. If it is not the case - it is not inheritance, but something else. Composition is when your objects consists of another, or has some relationship to them.

So for me it looks like if someone does not know if he needs inheritance or composition, the real problem is that he does not know if he want to drink or to eat. Think about your problem domain more, understand it better.",
  "n Java or C#, an object cannot change its type once it has been instantiated.

So, if your object need to appear as a different object or behave differently depending on an object state or conditions, then use Composition: Refer to State and Strategy Design Patterns.

If the object need to be of the same type, then use Inheritance or implement interfaces.",
  "
Personally I learned to always prefer composition over inheritance. There is no programmatic problem you can solve with inheritance which you cannot solve with composition; though you may have to use Interfaces(Java) or Protocols(Obj-C) in some cases. Since C++ doesn't know any such thing, you'll have to use abstract base classes, which means you cannot get entirely rid of inheritance in C++.

Composition is often more logical, it provides better abstraction, better encapsulation, better code reuse (especially in very large projects) and is less likely to break anything at a distance just because you made an isolated change anywhere in your code. It also makes it easier to uphold the \"Single Responsibility Principle\", which is often summarized as \"There should never be more than one reason for a class to change.\", and it means that every class exists for a specific purpose and it should only have methods that are directly related to its purpose. Also having a very shallow inheritance tree makes it much easier to keep the overview even when your project starts to get really large. Many people think that inheritance represents our real world pretty well, but that isn't the truth. The real world uses much more composition than inheritance. Pretty much every real world object you can hold in your hand has been composed out of other, smaller real world objects.

There are downsides of composition, though. If you skip inheritance altogether and only focus on composition, you will notice that you often have to write a couple of extra code lines that weren't necessary if you had used inheritance. You are also sometimes forced to repeat yourself and this violates the DRY Principle (DRY = Don't Repeat Yourself). Also composition often requires delegation, and a method is just calling another method of another object with no other code surrounding this call. Such \"double method calls\" (which may easily extend to triple or quadruple method calls and even farther than that) have much worse performance than inheritance, where you simply inherit a method of your parent. Calling an inherited method may be equally fast as calling a non-inherited one, or it may be slightly slower, but is usually still faster than two consecutive method calls."
]

300.times do
  an_answer = Answer.new()
  until an_answer.valid?
    an_answer = Answer.new(body: answers.sample, author_id: (1..17).to_a.sample, question_id: (1..35).to_a.sample)
  end
  an_answer.save
end
