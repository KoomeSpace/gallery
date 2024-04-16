def COLOR_MAP = [
    'FAILURE': 'danger',
    'SUCCESS': 'good'
]

pipeline {
    agent any
    tools {
        nodejs '21.7.3'
    }
    //Gets code from the repository
    stages {
        stage('Clone code from repo') {
            steps {
                script {
                    git branch: 'master', url: 'https://github.com/KoomeSpace/gallery.git'
                }
            }
        }
        //Make a few changes to the home page
        stage('Make first change to landing page') {
            steps {
                // Make changes to the landing page
                sh 'echo "<h1>MILESTONE 2</h1>" >> ./views/index.ejs'
            }
        }
            //Build the code
        stage ('Build') {
            steps {
                sh 'npm install' // Adding npm install step
            }
        }
            //Checks the test branch for tests and executes them
        stage ('Test'){
            steps {
                sh 'npm test'
            }
        }
        //Additional changes to the landing page
        stage('Update Landing Page 2') {
            steps {
                // Make changes to the landing page
                sh 'echo "<h1>MILESTONE 3</h1>" >> ./views/index.ejs'
            }
        }

        stage('Update Landing Page 3') {
            steps {
                // Make changes to the landing page
                sh 'echo "<h1>MILESTONE 4</h1>" >> ./views/index.ejs'
            }
            //Sends a notification to the slack channnel #brian_ip1
            post {
                always {
                    echo 'Slack channel notification'
                    slackSend(
                        channel: '#brian_IP1',
                        color: COLOR_MAP[currentBuild.currentResult],
                        message: "*${currentBuild.currentResult}:* Job ${env.JOB_NAME} \n build ${env.BUILD_NUMBER} \n more info at: ${env.BUILD_URL}"
                    )
                }
            }    
        }
    }
}

