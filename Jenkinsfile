def COLOR_MAP = [
    FAILURE: 'danger',
    SUCCESS: 'good'
]

pipeline {
    agent any
    tools {
        nodejs 'node'
    }

    stages {
        stage('Build') {
            steps {
                script {
                    git branch: 'master', url: 'https://github.com/KoomeSpace/gallery.git'
                    sh "npm install"
                    sh "npm --version"
                }
            }
        }
        
        stage('Make first change to landing page') {
            steps {
                // Make changes to the landing page
                sh 'echo "<h1>MILESTONE 2</h1>" >> ./views/index.ejs'
            }
        }

        stage ('Test') {
            steps {
                sh 'npm test'
            }
            post {
                failure {
                    // Send email notification if the test fails
                    emailext (
                        subject: "Failure in the testing stage",
                        body: "The test has failed. Check the error and try again.",
                        to: "koomebrian287@gmail.com"
                    )
                }
            }
        }

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
        }
    }
    
    stage('Send Slack Notification') {
        steps {
            script {
                echo 'Slack channel notification'
                slackSend(
                    channel: '#devops05',
                    color: COLOR_MAP[currentBuild.currentResult ?: 'FAILURE'], // Default to 'FAILURE' color if currentResult is null
                    message: "*${currentBuild.currentResult}:* Job ${env.JOB_NAME} \n build ${env.BUILD_NUMBER} \n more info at: ${env.BUILD_URL}"
                )
            }
        }
    }
}